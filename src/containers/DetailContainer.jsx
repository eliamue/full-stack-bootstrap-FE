import React from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/items/ItemDetail";
import { useOneItem } from "../hooks/useOneItem";
import "../styles/Detail.css";
// import { HashLink } from "react-router-hash-link";
import DummyDetail from "../components/items/DummyDetail";
import Nav from "../components/Nav";

const DetailContainer = () => {
  const { id } = useParams();
  const { loading, item } = useOneItem(id);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="detail-container">
            <header id="top">
        <Nav />
      </header>
      {item ? (
        <ItemDetail {...item} />
      ) : (
        <DummyDetail />
      )}
    </div>
  );
};

export default DetailContainer;
