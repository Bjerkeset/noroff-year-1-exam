import { applyMouseEffect } from "./assets/mouseEffect";
import { toggleHamburgerMenu } from "./assets/navbar";

const listContainer = document.getElementById("js-list-container");
const loadingIndicator = document.getElementById("js-loading-indicator");
const errorContainer = document.getElementById("js-error-container");
const search = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const authorFilter = document.getElementById("filter-select");

applyMouseEffect();
toggleHamburgerMenu();

//Keeps track of posts to be rendered.
let currentPosts = 6;

//Generates blog cards.
export function generateCardHTML(post) {
  const { title, author, date, excerpt } = post;

  return `
    <div class="blog__card " >
      <div class="card__item card__item--title">
        <h4>${title}</h4>
      </div>
      <div class="card__item card__item--author">
        <p>By: ${author}</p>
      </div>
      <div class="card__item card__item--date">
        <p>Date: ${new Date(date).toLocaleDateString()}</p>
      </div>
      <div class="card__item card__item--excerpt">
        <p>${excerpt}</p>
      </div>
      <div class="card__item card__item--btn">
      <a><span class="arrow right"></span></a>
      </div>
    </div>
  `;
}
//Generates Show-more button
function generateShowBlogsButtonHTML() {
  return `
    <div class="show-blogs__btn">
      <button class="button button--view-all-posts" id="js-view-all-post">View More</button>
    </div>
    `;
}

let posts = [];

//Fetches blog post from Sanity CMS
async function fetchBlogPosts() {
  try {
    const response = await fetch(
      'https://npd35udx.api.sanity.io/v1/data/query/production?query=*[_type == "blogPost"]'
    );

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const responseData = await response.json();
    posts = responseData.result;

    renderPosts(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    errorContainer.style.display = "block";
    errorContainer.innerHTML = error;
  } finally {
    loadingIndicator.style.display = "none";
  }
}
fetchBlogPosts();

function renderPosts(posts) {
  const container = listContainer;
  container.innerHTML = "";

  // Create a card container
  const cardContainer = document.createElement("div");
  cardContainer.className = "card__container blog__container--blogs";
  container.appendChild(cardContainer);

  // filter if an author is selected
  const selectedAuthor = authorFilter.value.trim();
  let filteredPosts = posts;
  if (selectedAuthor) {
    filteredPosts = posts.filter((post) => post.author === selectedAuthor);
  }

  // Sort ascending and descending
  const sortOption = sortSelect.value;
  if (sortOption === "ascending") {
    filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortOption === "descending") {
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // The Math.min is to only access as many posts as exist. If there are fewer than currentPosts, it will access all of them.
  for (let i = 0; i < Math.min(currentPosts, filteredPosts.length); i++) {
    const post = filteredPosts[i];
    const cardHTML = generateCardHTML(post);
    // Create a blog card and append it to the card container
    const blogCardWrapper = document.createElement("div");
    blogCardWrapper.className = "blog__card blog__card--blogs";
    blogCardWrapper.innerHTML = cardHTML;
    cardContainer.appendChild(blogCardWrapper);

    //Add an on click event for blog cards.
    blogCardWrapper.addEventListener("click", function () {
      window.location.href = `../pages/blog-detail.html?slug=${post.slug.current}`;
    });

    // Show or hide the blog card based on author filter
    if (selectedAuthor && post.author !== selectedAuthor) {
      blogCardWrapper.style.display = "none";
    }
  }

  // Show button functionality
  const showBlogsButtonHTML = generateShowBlogsButtonHTML();
  const showBlogsButtonWrapper = document.createElement("div");
  showBlogsButtonWrapper.className = "show-blogs__btn";
  showBlogsButtonWrapper.innerHTML = showBlogsButtonHTML;
  container.appendChild(showBlogsButtonWrapper);
  if (currentPosts < filteredPosts.length) {
    // Renders six more posts as "show more" button is clicked.
    document
      .getElementById("js-view-all-post")
      .addEventListener("click", function () {
        currentPosts += 6;
        renderPosts(posts);
      });
  } else {
    showBlogsButtonWrapper.style.display = "none"; // Removes button if all post are displayed.
  }

  applyMouseEffect();
}

// Search functionality
search.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const searchTerms = searchTerm.split(" ");

  const filteredPosts = posts.filter((post) => {
    const postContent =
      `${post.title} ${post.author} ${post.excerpt} `.toLowerCase();
    return searchTerms.every((term) => postContent.includes(term));
  });
  renderPosts(filteredPosts);
});

// Sort
sortSelect.addEventListener("change", () => {
  renderPosts(posts);
});
// Filter
authorFilter.addEventListener("input", () => {
  renderPosts(posts);
});
