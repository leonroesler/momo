import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart as ShoppingCartIcon } from "react-feather";
import { CartContext } from "../context/CartContext";
import ShoppingCart from "./ShoppingCart";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);

  const amountOfProductsInCart = () => {
    return cart.reduce((amount, product) => {
      return amount + product.amount;
    }, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__main">
        <ul className="navbar__item-list">
          <li>
            <NavLink to="/" className="navbar__logo">
              Momo
            </NavLink>
          </li>
          <li className="navbar__item-list__item">
            <NavLink to="/pflanzen" className="navbar__link">
              Pflanzen
            </NavLink>
          </li>
          <li className="navbar__item-list__item">
            <a className="navbar__link">Zubehör</a>
          </li>
          <li className="navbar__item-list__item">
            <a className="navbar__link">Pflegetipps</a>
          </li>
          <li className="navbar__item-list__item">
            <a className="navbar__link">Einrichtung</a>
          </li>
        </ul>
        <ul className="navbar__item-list navbar__quick-actions">
          <li className="navbar__item-list__item">
            <Search />
          </li>
          <li className="navbar__item-list__item">
            <Heart />
          </li>
          <li className="navbar__item-list__item">
            <a className="navbar__link navbar__link--cart">
              <ShoppingCartIcon
                onClick={() => {
                  setShowCart(!showCart);
                }}
              />
              {cart.length > 0 && (
                <div className="cart-badge">{amountOfProductsInCart()}</div>
              )}
            </a>
          </li>
        </ul>
      </div>
      <ShoppingCart showCart={showCart} setShowCart={() => setShowCart()} />
    </nav>
  );
};

export default Navbar;
