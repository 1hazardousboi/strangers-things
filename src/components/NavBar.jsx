import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div id="mainIcon">Strangers Things</div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/Profile">Profile </Link>
        <Link to="/Login">Login </Link>
      </nav>
    </header>
  );
}
