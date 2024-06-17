import { LuShoppingCart } from "react-icons/lu";
import "./cartWidget.css";
import React from "react";

export const CartWidget = () => {
  return (
    <div className="cart">
      <LuShoppingCart size={60} />
      <span>0</span>
    </div>
  );
};
