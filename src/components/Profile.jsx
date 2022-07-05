import React from "react";

export default function Profile({ token, currentUser }) {
  console.log(token, currentUser.username, currentUser.password);
  return (
    <div>
      <h4>Current User: {currentUser.username}</h4>
      <h4>Password: {currentUser.password} </h4>
      <h4>Token: {token}</h4>
    </div>
  );
}
