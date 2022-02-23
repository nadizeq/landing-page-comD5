import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo">
          COMD5
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
