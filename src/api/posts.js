const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft";

export const fetchPosts = async () => {
  const response = await fetch(`${url}/posts`);
  const result = await response.json();
  return result.data.posts;
};

export const createPost = async (token, post) => {
  const response = await fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: post.title,
        description: post.description,
        price: post.price,
        location: post.location,
        willDeliver: post.willDeliver,
      },
    }),
  });

  const result = await response.json();
  return result;
};
