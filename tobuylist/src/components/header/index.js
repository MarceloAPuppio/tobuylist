import "./index.css";
import React from "react";
import NavBar from "../navbar";

function Header() {
  return (
    <header className="header">
      <h3 className="header__title">My List</h3>
      <NavBar />
    </header>
  );
}

export default Header;
