import { parseISO, formatDistanceToNow } from "date-fns";
import React from "react";

const PostedTime = (props) => {
  let timeStamp = props.timeStamp;
  let timeAgo = "";
  if (timeStamp) {
    let date = parseISO(timeStamp);
    timeAgo = formatDistanceToNow(date);
    timeAgo = `${timeAgo} ago`;
  }
  return <p className="italic text-orange-100">{timeAgo}</p>;
};

export default PostedTime;
