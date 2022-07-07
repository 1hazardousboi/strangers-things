import React from "react";
import { useNavigate } from "react-router-dom";

export default function SingleMessage({ message, post, setTargetPost }) {
  console.log(message);
  let navigate = useNavigate();

  return (
    <div className="messageCard">
      <ul>
        <li className="messageSender">From: {message.fromUser.username}</li>
        <li className="messagePost">RE: {message.post.title}</li>
        <li className="messageBody">{message.content}</li>
      </ul>
      <button
        onClick={() => {
          setTargetPost(post);
          navigate("/Message");
        }}
      >
        Reply
      </button>
    </div>
  );
}
