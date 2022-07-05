import React from "react";

export default function Profile({ token, currentUser }) {
  console.log(token);
  console.log(currentUser);
  return (
    <div>
      <h4>User: {currentUser}</h4>
      <h4>Token: {token}</h4>
    </div>
  );
}
