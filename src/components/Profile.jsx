import React from "react";

export default function Profile({ token, currentUser }) {
  return (
    <div>
      <h3>Profile</h3>
      <h4>User: {currentUser}</h4>
      <h4>Token: {token}</h4>
      <div>Messages:</div>
    </div>
  );
}
