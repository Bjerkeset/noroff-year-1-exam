import { applyMouseEffect } from "./assets/mouseeffect";
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

    const cardContainer = document.createElement("div");
    cardContainer.className = "card__container";
    container.appendChild(cardContainer);

    for (let i = 0; i < 5; i++) {
      const post = data[i];
      const cardHTML = generateCardHTML(post);

      const blogCardWrapper = document.createElement("div");
      blogCardWrapper.className = "blog__card";
      blogCardWrapper.innerHTML = cardHTML;
      cardContainer.appendChild(blogCardWrapper);

      //Add an on click event for blog cards.
      blogCardWrapper.addEventListener("click", function () {
        window.location.href = `../pages/blog-detail.html?slug=${post.slug.current}`;
      });
    }

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

// Intersection observer
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

// Mouse effect
// const handleOnMouseMove = (e) => {
//   const { currentTarget: target } = e;

//   const rect = target.getBoundingClientRect(),
//     x = e.clientX - rect.left,
//     y = e.clientY - rect.top;

//   target.style.setProperty("--mouse-x", `${x}px`);
//   target.style.setProperty("--mouse-y", `${y}px`);
// };

// for (const card of document.querySelectorAll(".blog__card")) {
//   card.onmousemove = (e) => handleOnMouseMove(e);
// }

// // Mouse effect logic
// function applyMouseEffect() {
//   const handleOnMouseMove = (e) => {
//     const { currentTarget: target } = e;

//     const rect = target.getBoundingClientRect(),
//       x = e.clientX - rect.left,
//       y = e.clientY - rect.top;

//     target.style.setProperty("--mouse-x", `${x}px`);
//     target.style.setProperty("--mouse-y", `${y}px`);
//   };
//   for (const card of document.querySelectorAll(".blog__card")) {
//     card.onmousemove = (e) => handleOnMouseMove(e);
//   }
// }

/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
