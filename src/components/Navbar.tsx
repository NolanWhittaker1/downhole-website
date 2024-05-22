import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between"
        id="main"
      >
        <a
          className="navbar-brand"
          href="#"
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => setExpand(false)}
        >
          <h1 style={{ fontSize: expand ? "120%" : "100%" }}>
            Downhole Battery Inc.
            {expand}
          </h1>
        </a>
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Home
          </a>
          <a className="nav-item nav-link active" href="#">
            About
          </a>
          <a className="nav-item nav-link active" href="#">
            Battery Types
          </a>
          <a className="nav-item nav-link active" href="#">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
