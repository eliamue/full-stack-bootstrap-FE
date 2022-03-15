import React from "react";
import ListItem from "./ListItem";
import "../../styles/List.css";

const List = ({ items }) => {
  return (
    <div>
      <div className="main-container">
        <h1>List</h1>
        <ul aria-label="item-ul" className="item-container">
          {items.map((item) => (
            <li className="item-li" id={item.id} key={item.id}>
                <ListItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;