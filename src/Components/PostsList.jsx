import React from "react";
import { useSelector } from "react-redux";

const PostsList = () => {
  const allPosts = useSelector((Store) => Store.posts);
  return (
    <>
      <div className="max-w-3xl py-3 mx-auto">
        <h1 className="text-3xl mb-2 text-white text-center font-semibold">
          Your Feed
        </h1>
        {allPosts.map((item) => (
          <article
            key={item.id}
            className="border-2 border-slate-200 rounded-md p-3 my-1"
          >
            <h3 className="text-2xl  text-white text-center font-medium">
              {item.title}
            </h3>
            <p className="text-slate-100">{item.content}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default PostsList;
