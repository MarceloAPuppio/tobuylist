import "./App.css";
import React, { useEffect, useState } from "react";
import productsContext from "./context";
import Header from "./components/header";
import ProductsNAv from "./components/porducts-nav/products-nav";

function App() {
  const [products, setProducts] = useState([
    { name: "Manzana", icon: "π", category: ["frutas"] },
    { name: "Pera", icon: "π", category: ["frutas"] },
    { name: "Tomate", icon: "π", category: ["frutas", "verduras"] },
    { name: "Choclo", icon: "π½", category: ["verduras"] },
    { name: "mate", icon: "π§", category: ["infusiones"] },
    { name: "papel higiΓ©nico", icon: "π§", category: ["higiene"] },
    { name: "vasos", icon: "π§", category: ["bazar"] },
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
