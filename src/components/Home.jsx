import React from "react";
import "../styles/Home.css";
import Nav from "./Nav";

export default function Home() {
  return (
    <div>
      <header>
      <Nav />
      </header>
      <div>
        <div className="home-container">
          <h1 className="home-title">Home</h1>
        </div>
      </div>
    </div>
  );
}
