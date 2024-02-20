import React from "react";
import CartItem from "../components/cartItem/CartItem";

const Cart = () => {
  return (
    <div>
      <div className="container-fluid d-flex gap-4 justify-content-between">
        <p1>Product</p1>
        <p1>Title</p1>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr></hr>
      <CartItem />
    </div>
  );
};

export default Cart;
