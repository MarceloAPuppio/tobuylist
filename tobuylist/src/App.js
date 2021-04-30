import "./App.css";
import React, { useEffect, useState } from "react";
import productsContext from "./context";
import Header from "./components/header";
import ProductsNAv from "./components/porducts-nav/products-nav";

function App() {
  const [products, setProducts] = useState([
    { name: "Manzana", icon: "🍏", category: ["frutas"] },
    { name: "Pera", icon: "🍏", category: ["frutas"] },
    { name: "Tomate", icon: "🍏", category: ["frutas", "verduras"] },
    { name: "Choclo", icon: "🌽", category: ["verduras"] },
    { name: "mate", icon: "🧉", category: ["infusiones"] },
    { name: "papel higiénico", icon: "🧉", category: ["higiene"] },
    { name: "vasos", icon: "🧉", category: ["bazar"] },
  ]);
  const [filterProducts, setFilterProducts] = useState([]);
  // useEffect(() => {
  //   console.log(products[0]);
  // }, []);
  return (
    <productsContext.Provider
      value={[products, setProducts, filterProducts, setFilterProducts]}
    >
      <div className="App">
        <Header />
        <ProductsNAv />
      </div>
    </productsContext.Provider>
  );
}

export default App;
