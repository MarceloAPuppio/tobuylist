import React, { useState, useContext } from "react";
import productsContext from "../../../context";

export default function ProductsNavItem() {
  const [a, b, filterProducts] = useContext(productsContext);
  return filterProducts.map((prod, idx) => (
    <li key={idx}>
      <picture>
        <img src="http://source.unsplash.com/random/50x50" alt="img" />
      </picture>
      <h4>{prod.name}</h4>
    </li>
  ));
}
