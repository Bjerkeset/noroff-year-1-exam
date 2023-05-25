import sanityClient from "@sanity/client";
import { toggleHamburgerMenu } from "./assets/navbar";
const loadingIndicator = document.getElementById("js-loading-indicator");
const errorContainer = document.getElementById("js-error-container");
const listContainer = document.getElementById("js-list-container");
const commentsContainer = document.getElementById("js-comments-container");
const commentForm = document.getElementById("comment-form");
const urlParams = new URLSearchParams(window.location.search);
const postSlug = urlParams.get("slug");

toggleHamburgerMenu();

export function generateCardHTML(post) {
  const { title, author, date, excerpt, body } = post;

  let bodyContent = "";

  // Iterate over each block in the body
  for (let i = 0; i < body.length; i++) {
    const block = body[i];
    let tempContent = "";
    for (let j = 0; j < block.children.length; j++) {
      const child = block.children[j];
      tempContent += child.text + "\n";
    }

    // Wrap each part of the array in a span with a class based on its index
    if (i % 2 === 0) {
      bodyContent += `<span class="body-part even">${tempContent}</span>`;
    } else {
      bodyContent += `<span class="body-part odd">${tempContent}</span>`;
    }
  }
  return `
    <div class="blog__details " >
      <div class="card__details card__details--title">
        <h1>${title}</h1>
      </div>
      <div class="card__details card__details--author">
        <p>By: ${author}</p>
      </div>
      <div class="card__details card__details--date">
        <p>Date: ${new Date(date).toLocaleDateString()}</p>
      </div>
      <div class="card__details card__details--excerpt">
        <p>${excerpt}</p>
      </div>
      <div class="card__details card__details--body">
        <p>${bodyContent}</p>
      </div>
    </div>
  `;
}

function generateCommentsListHTML(comments) {
  let html = "";

  for (let i = 0; i < comments.length; i++) {
    html += `
    <div class="comment">
      <p>By: ${comments[i].name}</p>
      <p>${comments[i].comment}</p>
    </div>
    `;
  }
  return html;
}

async function fetchBlogPost() {
  try {
    const response = await fetch(
      `https://npd35udx.api.sanity.io/v1/data/query/production?query=*[slug.current == "${postSlug}"]`
    );

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const data = await response.json();
    const post = data.result[0];

    document.title = `Api-Ary | ${post.title} `;
    const blogHTML = generateCardHTML(post);
    listContainer.innerHTML = blogHTML;

    console.log("post", post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    errorContainer.style.display = "block";
    errorContainer.innerHTML = error;
  } finally {
    loadingIndicator.style.display = "none";
  }
}
fetchBlogPost();

async function fetchBlogComments() {
  try {
    const response = await fetch(
      'https://npd35udx.api.sanity.io/v1/data/query/production?query=*[_type == "comment"]'
    );

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const data = await response.json();
    const comments = data.result;

    commentsContainer.innerHTML = generateCommentsListHTML(comments);

    console.log("comments", comments);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    errorContainer.style.display = "block";
    errorContainer.innerHTML = error;
  } finally {
    loadingIndicator.style.display = "none";
  }
}
fetchBlogComments();

const client = sanityClient({
  projectId: "npd35udx",
  dataset: "production",
  token:
    "skeEGzdjNcjpyuisOLqITcpYRV1OAxIzoIClVGsAKI1pgOhFPvsbwkMM4e8SKMhFrBo8Sni40WVfL7l2SYKpsPV8Y3pUBkuFTE6gQywUR6w9YM4YYlrMcYxVsLbDH71Zec18vS7IbcDdPmteWDt7ceTXuMvF7D1GWpzz5QFgWOV2zHTE8pCs",
  useCdn: false, // to ensure fresh data
});

commentForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  const result = await client.create({
    _type: "comment",
    name: name,
    comment: comment,
  });

  console.log("Comment submitted", result);
});
