import React from "react";

export default function SinglePost({ post }) {
  console.log("Current Post", post);

  return (
    <div>
      <ul>
        <li>Title: {post.title}</li>
        <li>Description: {post.description}</li>
        <li>Location: {post.location}</li>
        <li>Price: {post.price}</li>
        <li>
          Will Deliver? {post.willDeliver ? "Deliver!" : "Pick it up yourself!"}
        </li>
        <li>Messages: {post.messages}</li>
        <li>Made by: {post.author.username}</li>
      </ul>
    </div>
  );
}
