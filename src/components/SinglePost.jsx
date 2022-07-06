import React from "react";

export default function SinglePost({ post }) {
  console.log("Current Post", post);

  return (
    <div id={post._id} className="postCard">
      <ul>
        <li className="cardTitle">{post.title}</li>
        <li>{post.description}</li>
        <li>Location: {post.location}</li>
        <li>{post.willDeliver ? "Free Delivery!" : "Pick it up yourself!"}</li>
        <li>Made by: {post.author.username}</li>
        <li className="cardPrice">Price: {post.price}</li>
      </ul>
      <div className="messageButton">
        {/* <button>Message This Seller!</button> */}
        {post.isAuthor ? (
          <div className="postFunctions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ) : (
          <div className="postFunctions">
            <button>Message This Seller!</button>
          </div>
        )}
      </div>
    </div>
  );
}
