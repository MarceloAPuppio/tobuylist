import React, { useContext, useEffect, useState } from "react";
import productsContext from "../../context";
import "./index.css";
export default function NavBar() {
  let [products, setProducts, filterProducts, setFilterProducts] = useContext(
    productsContext
  );
  const [arrayCategorias, setArrayCategorias] = useState([]);

  useEffect(() => {
    // setArrayCategorias=new Set([...products.map(((p)=>p.category)])
  }, []);
  const handleClick = (e) => {
    let categoria = e.target.innerText.toLowerCase();
    const filtrados = products.filter((p) => p.category.includes(categoria));
    setFilterProducts(filtrados);
    console.log(e.target.innerText.toLowerCase());
    console.log(products, filterProducts);
  };
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item navbar__list__item--selected">
          Vegetales
        </li>
        <li className="navbar__list__item" onClick={handleClick}>
          Frutas
        </li>
        <li className="navbar__list__item">Almacen</li>
        <li className="navbar__list__item">Limpieza</li>
        <li className="navbar__list__item">Higiene</li>
        <li className="navbar__list__item">Infusiones</li>
        <li className="navbar__list__item">Bebidas</li>
        <li className="navbar__list__item">Congelados</li>
      </ul>
    </nav>
  );
}
