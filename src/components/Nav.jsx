import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div>
      <section className="navlinks">
        <Link className="nav-a" to="/">
          Home
        </Link>
        <Link className="nav-a" to="/list">
          List
        </Link>
        <Link className="nav-a" to="/about">
          About
        </Link>
      </section>
    </div>
  );
}