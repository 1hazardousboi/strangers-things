import React, { useState } from "react";
import { createUser } from "../api/users";
import { useNavigate, Link } from "react-router-dom";

export default function Register({ setToken, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  return (
    <div class="login">
      <h3>Register:</h3>
      <form
        class="formStyle"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createUser(username, password);
          const token = result.data.token;
          setCurrentUser(username);
          setToken(token);
          localStorage.setItem("token", token);
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
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Link class="loginHelper" to="/LogIn">
        Already have an account?
      </Link>
    </div>
  );
}
