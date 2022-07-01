import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from "api/posts";
import SinglePost from "./SinglePost";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      setPosts(result);
    };
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post, index) => {
        return <SinglePost key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
}
