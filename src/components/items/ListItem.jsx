import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const ListItem = ({
  title,
  logo,
  id
}) => (
  <div className="item-container">
    <h2 className="title">{title}</h2>
    <Link to={`/${id}`}>
    <img src={logo} className="logo" alt={title} />
    </Link>
  </div>
);

ListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
};

export default ListItem;
