import React from "react";

export default function SinglePost({ post }) {
  // console.log("Current Post", post);

  return (
    <div class="postCard">
      <ul>
        <li class="cardTitle">{post.title}</li>
        <li>{post.description}</li>
        <li>Location: {post.location}</li>
        <li>{post.willDeliver ? "Free Delivery!" : "Pick it up yourself!"}</li>
        <li>Made by: {post.author.username}</li>
        <li class="cardPrice">Price: {post.price}</li>
      </ul>
      <div class="messageButton">
        <button>Message This Seller!</button>
      </div>
    </div>
  );
}
