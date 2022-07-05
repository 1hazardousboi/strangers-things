import { Home, LogIn, Profile, NavBar, Register } from "components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route
          path="/Profile"
          element={<Profile token={token} currentUser={currentUser} />}
        />
        <Route
          path="/Register"
          element={
            <Register setToken={setToken} setCurrentUser={setCurrentUser} />
          }
        />
      </Routes>
    </>
  );
}
