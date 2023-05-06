import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../Store/Slices/PostsSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((Store) => Store.users);
  const titleRef = useRef();
  const contentRef = useRef();
  const optionRef = useRef();
  const onFormSubmit = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let content = contentRef.current.value;
    let userId = optionRef.current.value;
    // console.log(title, content, option);
    dispatch(addPost(title, content, userId));
    titleRef.current.value = "";
    contentRef.current.value = "";
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
      <select
        name="users"
        id=""
        className="px-2 mt-0 mb-1 w-full"
        ref={optionRef}
      >
        {users.map((user) => (
          <option key={user.userId} value={user.userId}>
            {user.name}
          </option>
        ))}
      </select>

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
