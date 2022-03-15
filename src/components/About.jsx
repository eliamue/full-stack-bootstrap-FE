import React from "react";
import Nav from "./Nav";
import "../styles/About.css";
import Contact from "./Contact";

export default function About() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="about-container">
        <h1>About</h1>
        Lorem ipsum about this app and/or about me
      </div>
      <div className="contact-container">
        <Contact />
      </div>
    </div>
  );
}
