import React, { useContext, useState } from "react";

const BlogContext = React.createContext();

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useContext must be within BloggProvider");
  }

  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  const valueContext = {
    blogPosts,
    addBlogPost,
  };

  return (
    <BlogContext.Provider value={valueContext}>{children}</BlogContext.Provider>
  );
};
