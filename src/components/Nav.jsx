import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../styles/Nav.css";

export default class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {

    return (
      <Menu width="25vmin">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="list" className="menu-item" href="/list">List</a>
        <a id="about" className="menu-item" href="/about">About</a>
      </Menu>
    );
  }
}