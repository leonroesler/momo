import React, { useContext } from "react";
import Button from "../../reusables/Button";
import { CartContext } from "../../context/CartContext";

/**
 * This component renders a card with the name, price and img of a product to buy
 *
 * @param {Object} product the product to render
 *
 * @example <ProductCard product={plant} />
 */
const ProductCard = ({ product }) => {
  const cart = useContext(CartContext);

  // convert value in cents to value in €
  const convertPrice = () => {
    return product.price / 100;
  };

  return (
    <div className="product-card">
      <img
        src={require(`../../../assets/img/${product.img}`).default}
        className="product-card__product-img"
      />
      <h4>{product.name ? product.name : "-"}</h4>
      <h5>{convertPrice()}€</h5>
      <Button
        className="product-card__button"
        onClick={((e) => e.preventDefault, cart.addProduct.bind(this, product))}
      >
        Kaufen
      </Button>
    </div>
  );
};

export default ProductCard;
