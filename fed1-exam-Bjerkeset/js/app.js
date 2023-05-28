import { applyMouseEffect } from "./assets/mouseEffect";
import { toggleHamburgerMenu } from "./assets/navbar";

applyMouseEffect();
toggleHamburgerMenu();

const listContainer = document.querySelector("#js-list-container");
const errorContainer = document.querySelector("#js-error-container");

export function generateCardHTML(post) {
  const { title, author, date, excerpt } = post;

  return `
    <div class="blog__card">
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

function generateShowBlogsButtonHTML() {
  return `
    <div class="show-blogs__btn">
      <a href="./pages/blogs.html"><button class="button button--view-all-posts">View All Posts</button></a>
    </div>
    `;
}

async function fetchBlogPosts() {
  const loadingIndicator = document.getElementById("js-loading-indicator");
  loadingIndicator.style.display = "block";

  try {
    const response = await fetch(
      'https://npd35udx.api.sanity.io/v1/data/query/production?query=*[_type == "blogPost"]'
    );

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const responseData = await response.json();
    const data = responseData.result;
    const container = listContainer;

    //Create and append card container
    const cardContainer = document.createElement("div");
    cardContainer.className = "card__container";
    container.appendChild(cardContainer);

    //Create and append carusell left buttons
    const scrollLeftButton = document.createElement("button");
    scrollLeftButton.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
    scrollLeftButton.className = "scroll__button scroll__button--left ";
    cardContainer.appendChild(scrollLeftButton);

    scrollLeftButton.addEventListener("click", function () {
      cardContainer.scrollLeft += 1000;
    });

    for (let i = 0; i < 6; i++) {
      const post = data[i];
      const cardHTML = generateCardHTML(post);

      const blogCardWrapper = document.createElement("div");
      blogCardWrapper.className = "blog__card";
      blogCardWrapper.innerHTML = cardHTML;
      cardContainer.appendChild(blogCardWrapper);

      const maxScrollLeft =
        cardContainer.scrollWidth - cardContainer.offsetWidth;

      //Add an on click event for blog cards.
      blogCardWrapper.addEventListener("click", function () {
        window.location.href = `../pages/blog-detail.html?slug=${post.slug.current}`;
      });
    }

    //Create and append carusell right buttons
    const scrollRightButton = document.createElement("button");
    scrollRightButton.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
    scrollRightButton.className =
      "scroll__button scroll__button--right is-hidden";
    cardContainer.appendChild(scrollRightButton);

    function toggleScrollButtonVisibility() {
      if (cardContainer.scrollLeft <= 5) {
        scrollRightButton.classList.add("is-hidden");
        scrollLeftButton.classList.remove("is-hidden");
      } else if (cardContainer.scrollLeft >= 830) {
        scrollRightButton.classList.remove("is-hidden");
        scrollLeftButton.classList.add("is-hidden");
      } else {
        scrollRightButton.classList.add("is-hidden");
        scrollLeftButton.classList.add("is-hidden");
      }
    }

    // Add event listener for scroll event on cardContainer
    cardContainer.addEventListener("scroll", toggleScrollButtonVisibility);

    scrollRightButton.addEventListener("click", function () {
      cardContainer.scrollLeft -= 1000;
    });

    const showBlogsButtonHTML = generateShowBlogsButtonHTML();
    const showBlogsButtonWrapper = document.createElement("div");
    showBlogsButtonWrapper.className = "show-blogs__btn";
    showBlogsButtonWrapper.innerHTML = showBlogsButtonHTML;
    container.appendChild(showBlogsButtonWrapper);

    applyMouseEffect();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    errorContainer.style.display = "block";
    errorContainer.innerHTML = error;
  } finally {
    loadingIndicator.style.display = "none";
  }
}

fetchBlogPosts();

// Intersection observer for fade-in services cards
const observer = new IntersectionObserver((entries) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const card = entry.target;

    if (entry.isIntersecting) {
      card.classList.add("is-visible");
    } else {
      card.classList.remove("is-visible");
    }
  }
});

const cards = document.querySelectorAll(".services__card");
for (let i = 0; i < cards.length; i++) {
  observer.observe(cards[i]);
}
