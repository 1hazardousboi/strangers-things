import React from "react";

export default function Profile({ token, currentUser }) {
  console.log(token);
  console.log(currentUser);
  return (
    <div>
      <h4>Token: {token}</h4>
    </div>
  );
}
