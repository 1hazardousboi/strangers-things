import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from "api/posts";
import PostCard from "./SinglePost";

export default function Home({ token, setTargetPost }) {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts(token);
      setPosts(result);
    };
    getPosts();
  }, [token]);

  function postMatches(post, text) {
    if (post.title.includes(text)) {
      return true;
    } else if (post.location?.includes(text)) {
      return true;
    } else if (post.description?.includes(text)) {
      return true;
    } else if (post.author?.username.includes(text)) {
      return true;
    } else if (post.price?.includes(text)) {
      return true;
    } else {
      return false;
    }
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div>
      <form className="formStyle">
        <input
          value={searchTerm}
          placeholder="search here!"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {postsToDisplay.map((post, index) => {
        return (
          <PostCard
            key={`Key: ${index}`}
            post={post}
            token={token}
            setTargetPost={setTargetPost}
          />
        );
      })}
    </div>
  );
}
