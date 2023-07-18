import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="title">
        <Link to="/">
          <img src="https://freepngimg.com/thumb/kangaroo/11-2-kangaroo-png-file.png" className="kang" href="/"></img>
          <h1 className="logo">kangaroo</h1>
        </Link>
      </div>
      <div className="nav">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
