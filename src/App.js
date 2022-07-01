import { Home, LogIn, Profile, NavBar } from "components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}
