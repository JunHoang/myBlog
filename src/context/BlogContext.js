import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG_POSTS":
      return action.payload;

    case "EDIT_BLOG_POST":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "DELETE_BLOG_POST":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "GET_BLOG_POSTS", payload: response.data });
  };
};

const addBlogPost = () => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: "DELETE_BLOG_POST", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "EDIT_BLOG_POST", payload: { id, title, content } });

    if (callback) {
      callback();
    }
  };
};

const actions = {
  addBlogPost,
  deleteBlogPost,
  editBlogPost,
  getBlogPosts,
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  actions,
  []
);
