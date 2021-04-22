import "./App.css";
import React, { useEffect, useState } from "react";
import productsContext from "./context";
import Header from "./components/header";

function App() {
  const [products, setProducts] = useState([
    { name: "Manzana", icon: "🍏", category: ["frutas"] },
    { name: "Choclo", icon: "🌽", category: ["verduras"] },
    { name: "mate", icon: "🧉", category: ["infusiones"] },
  ]);
  // useEffect(() => {
  //   console.log(products[0]);
  // }, []);
  return (
    <productsContext.Provider value={products}>
      <div className="App">
        <Header />
      </div>
    </productsContext.Provider>
  );
}

export default App;
