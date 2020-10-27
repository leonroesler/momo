import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../reusables/CartItem";
import Button from "../reusables/Button";
import Coupons from "../../assets/data/Coupons.json";

const ShoppingCart = ({ show }) => {
  const { cart } = useContext(CartContext);

  const [couponText, setCouponText] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [hasValidCoupon, setHasValidCoupon] = useState(false);

  // convert value in cents to value in €
  const convertPrice = (price) => {
    return price / 100;
  };

  const calcTotal = () => {
    let total = cart.reduce((accumolator, product) => {
      return accumolator + product.price * product.amount;
    }, 0);

    // reduce price depending on valid coupon and round it to two digits
    if (hasValidCoupon) {
      total = Math.round(
        ((total - total * (Coupons[couponText] / 100)) * 100) / 100
      );
    }
    return convertPrice(total);
  };

  const submitCoupon = () => {
    if (Coupons[couponText] !== undefined) {
      setHasValidCoupon(true);
    } else {
      setHasValidCoupon(false);
    }
    setWasSubmitted(true);
  };

  return (
    <aside className={`shopping-card${show ? "--show" : ""}`}>
      <h2>Warenkorb</h2>
      <ul className="cart-item-list">
        {cart.map((product) => {
          return (
            <li id={product.id}>
              <CartItem product={product} />
            </li>
          );
        })}
      </ul>
      <div className="shopping-card__coupon-form">
        <form>
          <label for="couponText">Gutscheincode: </label>
          <input
            id="couponText"
            placeholder="Code Eingeben"
            type="text"
            name="coupon"
            value={couponText}
            className="shopping-card__coupon-input"
            onChange={(e) => {
              setCouponText(e.target.value);
            }}
          ></input>
          {wasSubmitted && !hasValidCoupon && (
            <h6 className="shopping-card__invalid-code">Ungültiger Code!</h6>
          )}
          {wasSubmitted && hasValidCoupon && (
            <h6 className="shopping-card__valid-code">Gültiger Code!</h6>
          )}
          <div className="button" onClick={() => submitCoupon()}>
            Einlösen
          </div>
        </form>
      </div>
      <div className="shopping-card__total">
        <h5>Gesamtsumme:&nbsp;&nbsp;{calcTotal()}€</h5>
        {wasSubmitted && hasValidCoupon && (
          <h6>Der Preis wurde um {Coupons[couponText]}% reduziert</h6>
        )}
      </div>
    </aside>
  );
};

export default ShoppingCart;
