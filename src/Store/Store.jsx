import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./Slices/PostsSlice";
const Store = configureStore({
  reducer: {
    posts: postsSliceReducer,
  },
});
export default Store;
