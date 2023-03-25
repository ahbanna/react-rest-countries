import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>This is form header component</h2>
      <nav className="main-menu">
        <a href="">Home</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
