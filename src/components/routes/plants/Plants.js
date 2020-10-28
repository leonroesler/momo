import React, { useState } from "react";
import Stock from "../../../assets/data/Stock.json";
import ProductCard from "./ProductCard";

/**
 * This component renders the product page of the plants
 */
const Plants = () => {
  const [stock, setStock] = useState(Stock);

  const renderPlantsGrid = () => {
    return stock.map((plant) => {
      return <ProductCard product={plant} />;
    });
  };

  return (
    <main className="main">
      <h1>Pflanzen</h1>
      <div className="product-grid">
        {renderPlantsGrid()}
        {renderPlantsGrid()}
      </div>
    </main>
  );
};

export default Plants;
