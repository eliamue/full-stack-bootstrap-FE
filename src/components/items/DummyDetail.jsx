import React from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useDummyData from "../../services/dummyService";

export default function DummyDetail() {
  const { id } = useParams();
  const { dumbObject, loading } = useDummyData(id);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <figure className="figure-container">
          <figcaption className="title">{dumbObject.title}</figcaption>
        <a href={dumbObject.website} className="item-link">
          <img
            className="item-img"
            alt={dumbObject.title}
            src={dumbObject.logo}
          />
        </a>
        <div className="textfield">{dumbObject.textfield}</div>
        <div className="truthy">{dumbObject.truthy_thing}</div>
        <div className="number">{dumbObject.number_thing}</div>
      </figure>
      <HashLink to={"/list"}>Back to list</HashLink>
    </>
  );
}
