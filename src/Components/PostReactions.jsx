import React from "react";
import { useDispatch } from "react-redux";
import { reactionsAdded } from "../Store/Slices/PostsSlice";

const PostReactions = (props) => {
  const dispatch = useDispatch();
  const reactions = {
    thumbsUp: "🙌",
    love: "❤",
    appreciate: "👏",
  };
  const toBeRendered = Object.entries(reactions).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className="p-2 border-none text-white"
        onClick={() => {
          dispatch(reactionsAdded({ postId: props.post.id, reaction: name }));
        }}
      >
        {emoji}
        {props.post.reactions[name]}
        {/* {name} */}
      </button>
    );
  });
  return <div>{toBeRendered}</div>;
};

export default PostReactions;
