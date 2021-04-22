import React from "react";
import "./index.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item navbar__list__item--selected">
          Vegetales
        </li>
        <li className="navbar__list__item">Frutas</li>
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
