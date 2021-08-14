import React, { useContext, useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `Blog Post #${state.length + 1}` }];

    default:
      return state;
  }
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useContext must be within BloggProvider");
  }

  return context;
};

export const BlogProvider = ({ children }) => {
  const initialState = [];
  const [blogPosts, dispatch] = useReducer(blogReducer, initialState);

  const addBlogPost = () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };

  const valueContext = {
    blogPosts,
    addBlogPost,
  };

  return (
    <BlogContext.Provider value={valueContext}>{children}</BlogContext.Provider>
  );
};
