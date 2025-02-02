import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/FormatPrice";

function Productsss({ id, name, image, price, category }) {
  console.log("Productsss Props:", { id, name, image, price, category }); // Debug props

  return (
    <NavLink to={`/single/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price}/>}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Productsss;


