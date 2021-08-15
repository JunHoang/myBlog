import React, { useContext, useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `Blog Post #${state.length + 1}` }];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };
};

const actions = {
  addBlogPost,
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  actions,
  []
);
