import React from "react";

export default function SingleMessage({ message }) {
  console.log(message);
  return (
    <div class="messageBox">
      <ul>
        <li>Regarding: {message.post.title}</li>
        <li>Messages! = {message.content}</li>
        <li>Username: {message.fromUser.username}</li>
      </ul>
    </div>
  );
}
