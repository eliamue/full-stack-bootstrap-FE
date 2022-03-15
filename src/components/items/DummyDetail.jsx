import React from 'react';
import { HashLink } from "react-router-hash-link";

export default function DummyDetail() {
  return (
    <>
    <figure className="item-figure">
      <h1 className="name">A Title</h1>
      <a href="https://www.zombo.com/" alt="A Title">
        <img
          src="https://thiscatdoesnotexist.com/"
          className="logo"
          alt="A Title"
        />
      </a>
      <section className="description">Number 1 is A Title</section>
      <section className="details">A Title is truthy thing!</section>
    </figure>
    <HashLink to={"/list"}>Back to list</HashLink>
  </>
  )
}
