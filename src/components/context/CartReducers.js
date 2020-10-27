import React, { useReducer } from "react";
/**
 * Capsule reducer regarding the CartContext
 */

// possible action types
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const INCREASE_PRODUCTAMOUNT = "INCREASE_PRODUCTAMOUNT";
export const DECREASE_PRODUCTAMOUNT = "DECREASE_PRODUCTAMOUNT";

const addProductToCart = (product, cart) => {
  let updatedCart = [...cart];
  // check if there is already a product with the same ID in the cart
  const updatedProductIndex = cart.findIndex(
    (preaddedProduct) => preaddedProduct.id === product.id
  );

  // decide if increase amount or add complete new product
  if (updatedProductIndex >= 0) {
    const indexToUpdate = cart.findIndex(
      (existingProduct) => existingProduct.id === product.id
    );
    const updatedProduct = { ...updatedCart[indexToUpdate] };
    updatedProduct.amount++;
    updatedCart[updatedProductIndex] = updatedProduct;
  } else {
    product.amount = 1;
    updatedCart.push(product);
  }
  return updatedCart;
};

const deleteProductFromCart = (id, cart) => {
  // find the product in the array via id
  let updatedCart = [...cart];
  const indexToDelete = cart.findIndex((product) => product.id === id);
  updatedCart.splice(indexToDelete, 1);
  return updatedCart;
};

const increaseProductCounter = (id, cart) => {
  let updatedCart = [...cart];
  const indexToUpdate = cart.findIndex(
    (existingProduct) => existingProduct.id === id
  );
  const updatedProduct = { ...updatedCart[indexToUpdate] };

  updatedProduct.amount++;
  updatedCart[indexToUpdate] = updatedProduct;

  return updatedCart;
};

const decreaseProductCounter = (id, cart) => {
  let updatedCart = [...cart];
  const indexToUpdate = cart.findIndex(
    (existingProduct) => existingProduct.id === id
  );
  const updatedProduct = { ...updatedCart[indexToUpdate] };

  // decide if decrease amount or delete complete product
  if (updatedProduct.amount <= 1) {
    updatedCart.splice(indexToUpdate, 1);
  } else {
    updatedProduct.amount--;
    updatedCart[indexToUpdate] = updatedProduct;
  }

  return updatedCart;
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case DELETE_PRODUCT:
      return deleteProductFromCart(action.id, state);
    case INCREASE_PRODUCTAMOUNT:
      return increaseProductCounter(action.id, state);
    case DECREASE_PRODUCTAMOUNT:
      return decreaseProductCounter(action.id, state);
    default:
      return state;
  }
};
