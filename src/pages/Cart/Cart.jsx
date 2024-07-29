import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import { CiTrash } from "react-icons/ci";

export const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  return (
    <div className="cartDetailContainer">
      <h1> Resumen de la compra: </h1> 
      {cart.map((elemento) => (
        <div key={elemento.id} className="cartItem">
          <div >
            <h2>{elemento.title}</h2>
            <h3>Cantidad: {elemento.quantity}</h3>
            <h4>Precio: $ {elemento.price}</h4>
            <div className="iconContainer">
              <CiTrash 
                size={"3rem"}
                onClick={() => deleteProduct(elemento.id)}
              />
              <span className="iconLabel">Para eliminar presiona el tachito</span>
            </div>
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
