import React from "react";

const Navbar = ({ ctrslength }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Counter{" "}
        <span className="badge badge-pill badge-secondary">{ctrslength}</span>
      </a>
    </nav>
  );
};

export default Navbar;
