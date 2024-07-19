import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';

export const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  return (
    <div className="cartDetailContainer">
      {cart.map((elemento) => (
        <div key={elemento.id} className="cartItem">
          <div className="cartItemInfo">
            <h2>{elemento.title}</h2>
            <h3>Cantidad: {elemento.quantity}</h3>
            <h4>Precio: $ {elemento.price}</h4>
            <Button
              variant="contained"
              onClick={() => deleteProduct(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
          <img src={elemento.img} alt={elemento.title} className="cartItemImage" />
        </div>
      ))}
      <p className="totalPrice">El total a pagar es de: $ {total}</p>
      <div className="cartButtons">
        <Button onClick={clearCart}>Limpiar carrito</Button>
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      </div>
    </div>
  );
};
