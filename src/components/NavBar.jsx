import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ token, setToken, setCurrentUser }) {
  return (
    <header>
      <Link to="/" id="mainIcon">
        Strangers Things
      </Link>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/Profile">Profile </Link>
        {token ? (
          <Link
            to="/Login"
            onClick={() => {
              setToken(null);
              localStorage.clear();
              setCurrentUser("");
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link to="/Login">Log In </Link>
        )}
        <Link to="/NewPost">New Post</Link>
      </nav>
    </header>
  );
}
