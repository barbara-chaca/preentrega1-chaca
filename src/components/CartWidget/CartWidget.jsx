import { Badge } from "@mui/material";
import { Link } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartWidget.css";
import React from "react";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="cart"> 
        <Badge badgeContent={0} color="secondary" showZero={true}>
          <ShoppingCartIcon />
        </Badge>
      </div>        
    </Link>
  );
};
