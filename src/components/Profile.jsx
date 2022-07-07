import React, { useState } from "react";
import { useEffect } from "react";
import SinglePost from "./SinglePost";
import { fetchProfile } from "api/posts";
import SingleMessage from "./SingleMessage";

export default function Profile({ token, currentUser, setTargetPost }) {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  const onProfile = true;

  useEffect(() => {
    const getProfile = async () => {
      const result = await fetchProfile(token);
      setPosts(result.data.posts);
      setMessages(result.data.messages);
    };
    getProfile();
  }, [token]);

  return (
    <div>
      <h3>Profile</h3>
      <h4>User: {currentUser}</h4>
      <h4>Token: {token}</h4>
      <div>
        {messages.map((message, index) => {
          return <SingleMessage key={`Key: ${index}`} message={message} />;
        })}
      </div>
      <div>
        {posts.map((post, index) => {
          return post.active ? (
            <SinglePost
              key={`Key: ${index}`}
              post={post}
              token={token}
              setTargetPost={setTargetPost}
              onProfile={onProfile}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
