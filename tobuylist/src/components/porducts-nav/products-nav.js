import React from "react";
import ProductsNavItem from "./products-nav-item";
export default function ProductsNAv() {
  return (
    <>
      <nav className="products-nav">
        <ul products-nav__list>
          <ProductsNavItem />
        </ul>
      </nav>
    </>
  );
}
