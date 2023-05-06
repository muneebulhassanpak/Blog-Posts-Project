import React from "react";
import { useSelector } from "react-redux";
const User = (props) => {
  const users = useSelector((Store) => Store.users);
  let user, userName;
  if (props.userId) {
    user = users.find((user) => user.userId == props.userId);
    userName = user.name;
  } else {
    user = "Unknown User";
    userName = "Unknown User";
  }
  console.log(user);
  return (
    <div>
      <p className="text-slate-300 text-base">By :{userName}</p>
    </div>
  );
};

export default User;
