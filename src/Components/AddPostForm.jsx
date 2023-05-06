import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../Store/Slices/PostsSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();
  const onFormSubmit = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let content = contentRef.current.value;
    dispatch(addPost(title, content));
  };
  return (
    <form
      className="max-w-2xl mx-auto border-2 border-slate-400 rounded-md p-2 "
      onSubmit={onFormSubmit}
    >
      <input
        className="px-2 h-8 my-2 w-full"
        placeholder="Post title goes here"
        type="text"
        name="postTitle"
        ref={titleRef}
      />
      <textarea
        className="px-2  mt-0 mb-1 w-full"
        placeholder="Post content goes here"
        type="text"
        name="postContent"
        ref={contentRef}
      />
      <div className="text-right">
        <input
          type="submit"
          value="Save"
          className="px-6 py-2 rounded-md bg-orange-400 text-white hover:cursor-pointer hover:bg-orange-500"
        />
      </div>
    </form>
  );
};

export default AddPostForm;
