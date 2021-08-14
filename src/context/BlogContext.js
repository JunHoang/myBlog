import React, { useContext } from "react";

const BlogContext = React.createContext();

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useContext must be within BloggProvider");
  }

  return context;
};

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={25}>{children}</BlogContext.Provider>;
};
