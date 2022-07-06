import { Home, LogIn, Profile, NavBar, Register, NewPost } from "components";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMe } from "api/users";

export default function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      setCurrentUser(result.data.user.username);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/LogIn"
          element={
            <LogIn setToken={setToken} setCurrentUser={setCurrentUser} />
          }
        />
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
        <Route path="/NewPost" element={<NewPost token={token} />} />
      </Routes>
    </>
  );
}
