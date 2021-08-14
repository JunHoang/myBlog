import React from "react";

const BlogContext = React.createContext();

const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useContext must be within BloggProvider");
  }

  return context;
};

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
