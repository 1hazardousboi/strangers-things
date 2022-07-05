import React, { useState } from "react";
import { createUser } from "../api/users";
import { useNavigate } from "react-router-dom";
export default function Register({ setToken, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createUser(username, password);
          const newUser = { username: username, password: password };
          const token = result.data.token;
          setCurrentUser(newUser);
          setToken(token);
          navigate("/");
          localStorage.setItem("token", token);
          navigate("/");
        }}
      >
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
