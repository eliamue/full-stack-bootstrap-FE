import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../styles/Nav.css";
import { Link } from 'react-router-dom';



export default class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {

    return (
      <Menu width="25vmin">
        <Link id="home" className="menu-item" to={"/"}>Home</Link>
        <Link id="list" className="menu-item" to={"/list"}>List</Link>
        <Link id="about" className="menu-item" to={"/about"}>About</Link>
      </Menu>
    );
  }
}