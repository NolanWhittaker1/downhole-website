import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between"
        id="main"
      >
        <Link
          className="navbar-brand"
          to="/"
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => setExpand(false)}
        >
          <h1 style={{ fontSize: expand ? "120%" : "100%" }}>
            Downhole Battery Inc.
            {expand}
          </h1>
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link active" to="/about">
            About
          </Link>
          <Link className="nav-item nav-link active" to="/products">
            Battery Types
          </Link>
          <Link className="nav-item nav-link active" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
