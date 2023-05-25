import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        contact: path.resolve(__dirname, "pages/contact.html"),
        about: path.resolve(__dirname, "pages/about.html"),
        blog: path.resolve(__dirname, "pages/blogs.html"),
        blogDetail: path.resolve(__dirname, "pages/blog-detail.html"),
      },
    },
  },
});
