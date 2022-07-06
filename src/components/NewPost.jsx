import React, { useState } from "react";
import { createPost } from "api/posts";
import { useNavigate } from "react-router-dom";

export default function NewPost({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  let navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(token, {
            title,
            description,
            price,
            location,
            willDeliver,
          });
          navigate("/");
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        ></input>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></input>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        ></input>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        ></input>
        <label htmlFor="willDeliver">Will Deliver?</label>
        <input
          value={willDeliver}
          onChange={(e) => setWillDeliver(e.target.checked)}
          type="checkbox"
        ></input>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
