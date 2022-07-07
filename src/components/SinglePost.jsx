import React from "react";
import { deletePost } from "api/posts";
import { useNavigate } from "react-router-dom";

export default function SinglePost({ token, post, setTargetPost, onProfile }) {
  console.log("Current Post", post); // viewing each post

  let navigate = useNavigate();

  return (
    <div id={post._id} className="postCard">
      <ul>
        <li
          className="cardTitle"
          onClick={() => {
            navigate(`/${post._id}`);
          }}
        >
          {post.title}
        </li>
        <li>{post.description}</li>
        <li>Location: {post.location}</li>
        <li>{post.willDeliver ? "Free Delivery!" : "Pick it up yourself!"}</li>
        <li>Made by: {post.author.username}</li>
        <li className="cardPrice">Price: {post.price}</li>
      </ul>
      <div className="buttons">
        {post.isAuthor || onProfile ? (
          <div className="postFunctions">
            <button
              onClick={() => {
                setTargetPost(post);
                navigate("/EditPost");
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                deletePost(token, post);
                window.location.reload();
                // Not optimal to refresh page every delete, temporary fix!!
              }}
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="postFunctions">
            <button
              onClick={() => {
                setTargetPost(post);
                navigate("/Message");
              }}
            >
              Message This Seller!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
