import React, { createContext, useReducer } from "react";
import Cart from "../../assets/data/Cart.json";
import {
  CartReducer,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  INCREASE_PRODUCTAMOUNT,
  DECREASE_PRODUCTAMOUNT,
} from "./CartReducers";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //const [ShoppingCart, setShoppingCart] = useState(Cart);
  const [cart, dispatch] = useReducer(CartReducer, Cart);

  // actions to call
  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const deleteProductFromCart = (id) => {
    dispatch({ type: DELETE_PRODUCT, id: id });
  };

  const increaseProductAmount = (id) => {
    dispatch({ type: INCREASE_PRODUCTAMOUNT, id: id });
  };

  const decreaseProductAmount = (id) => {
    dispatch({ type: DECREASE_PRODUCTAMOUNT, id: id });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addProduct: addProductToCart,
        deleteProduct: deleteProductFromCart,
        increaseAmount: increaseProductAmount,
        decreaseAmount: decreaseProductAmount,
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
};
