import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./Slices/PostsSlice";
import usersReducer from "./Slices/usersSlice";
const Store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    users: usersReducer,
  },
});
export default Store;
