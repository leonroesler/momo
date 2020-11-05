import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2, PlusCircle, MinusCircle } from "react-feather";

const CartItem = ({ product }) => {
  const cart = useContext(CartContext);

  // convert value in cents to value in €
  const convertPrice = (price) => {
    return price / 100;
  };

  const calcTotal = () => {
    return convertPrice(product.price * product.amount);
  };

  return product !== undefined ? (
    <div className="cart-item">
      <div className="cart-item__product">
        <div className="cart-item__product-infos">
          <img
            src={require(`../../assets/img/${product.img}`).default}
            className="cart-item__product-img"
          />
          <h5 className="cart-item__product-name">
            {product.name ? product.name : "-"}
          </h5>
          <h6 className="cart-item__price">{convertPrice(product.price)}€</h6>
        </div>
        <div className="cart-item__amount-picker">
          <PlusCircle
            onClick={() => cart.increaseAmount(product.id, cart)}
            className="cart-item__amount-button"
          />
          <h6>Anzahl</h6>
          <h5>{product.amount}</h5>
          <MinusCircle
            onClick={() => cart.decreaseAmount(product.id, cart)}
            className="cart-item__amount-button"
          />
        </div>
      </div>

      <h5 className="cart-item__total">{calcTotal()}€</h5>
      <Trash2
        onClick={() => {
          cart.deleteProduct(product.id, cart);
        }}
        className="cart-item__delete-button"
      />
    </div>
  ) : (
    <div></div>
  );
};

export default CartItem;
