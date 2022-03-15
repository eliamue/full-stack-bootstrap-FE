import React from "react";
import List from "../components/items/List";
import { useAllItems } from '../hooks/useAllItems';
import "../styles/List.css";
import Nav from "../components/Nav";
import dummydata from "../components/items/dummydata";

const ListContainer = () => {
  const { items } = useAllItems();

  return (
    <div>
      <header id="top">
        <Nav />
      </header>
      {items ? 
      <List items={items} />
      : <List items={dummydata} />
      }
    </div>
  );
};
export default ListContainer;
