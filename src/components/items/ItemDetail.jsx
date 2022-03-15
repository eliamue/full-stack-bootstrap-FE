import React from "react";
import { useParams } from "react-router-dom";
import { useOneItem } from "../../hooks/useOneItem";
import { HashLink } from 'react-router-hash-link';

const ItemDetail = () => {
  const { id } = useParams();
  const { loading, item } = useOneItem(id);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <figure className="item-figure">
        <figcaption className="name">{item.title}</figcaption>
        <a href={item.website} alt={item.title}>
          <img src={item.logo} className="logo" alt={item.title} />
        </a>
        <section className="description">
          Number {item.number_thing} is {item.textfield}
        </section>
        <section className="details">
          {item.truthy_thing ? (
            <div className="truthy-thing">
                {item.title} is truthy thing!
            </div>
          ) : (
            ""
          )}
        </section>
      </figure>
      <HashLink to={`/list/#${item.id}`}>
        Back to list
      </HashLink>
    </>
  );
};

export default ItemDetail;
