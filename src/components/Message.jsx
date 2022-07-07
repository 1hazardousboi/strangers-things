import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { messagePost } from "api/posts";

export default function Message({ token, targetPost, setTargetPost }) {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await messagePost(token, targetPost, message);
          setTargetPost({});
          navigate("/Profile");
        }}
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message here!"
        ></input>
        <button type="submit">Submit Message!</button>
      </form>
    </div>
  );
}
