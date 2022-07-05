import React, { useState } from "react";

import { loginUser } from "../api/users";

import { Link, useNavigate } from "react-router-dom";

export default function Login({ setToken, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  return (
    <div class="login">
      <h3>Log In:</h3>
      <form
        class="formStyle"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setCurrentUser(username);
          navigate("/Profile");
        }}
      >
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button class="submit" type="submit">
          Submit
        </button>
      </form>
      <Link class="loginHelper" to="/Register">
        Don't have an account?
      </Link>
    </div>
  );
}
