import React, { useContext, useEffect, useState } from "react";
import productsContext from "../../context";
import "./index.css";
export default function NavBar() {
  let [products, setProducts, filterProducts, setFilterProducts] = useContext(
    productsContext
  );
  const [arrayCategorias, setArrayCategorias] = useState([]);

  useEffect(() => {
    //similar a un didmount, traemos todas las categorías existentes y las cargasmos en arrayCateg...
    let arr = products.map((p) => p.category);
    setArrayCategorias(new Set(arr.flat()));
  }, []);
  const handleClick = (e) => {
    const allItems = document.querySelectorAll(".navbar__list__item");
    allItems.forEach((e) => e.classList.remove("navbar__list__item--selected"));
    e.target.classList.add("navbar__list__item--selected");
    let categoria = e.target.innerText.toLowerCase();
    const filtrados = products.filter((p) => p.category.includes(categoria));
    setFilterProducts(filtrados);
  };
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {arrayCategorias &&
          [...arrayCategorias].map((cat) => (
            <li className="navbar__list__item" onClick={handleClick}>
              {cat}
            </li>
          ))}
      </ul>
    </nav>
  );
}
