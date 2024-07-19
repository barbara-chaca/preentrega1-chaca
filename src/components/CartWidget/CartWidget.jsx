import { Badge } from "@mui/material";
import { Link } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci";
import "./cartWidget.css";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {
  const { getTotalItems } = useContext( CartContext );
  let total = getTotalItems();

  return (
    <Link to="/carrito">
      <div className="cart"> 
        <Badge badgeContent={total} color="secondary" showZero={true} style={{marginTop:"4rem"}}>
          <CiShoppingCart size="4rem"/>
        </Badge>
      </div>        
    </Link>
  );
};
