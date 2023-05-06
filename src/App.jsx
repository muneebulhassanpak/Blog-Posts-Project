import React from "react";
import PostsList from "./Components/PostsList";
import AddPostForm from "./Components/AddPostForm";
function App() {
  return (
    <div className="bg-slate-600 min-w-screen min-h-screen py-3">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
