import { Button } from "@mui/material";

export const Counter = ({ sumar, contador, restar, onAdd }) => {
    return (
      <div>
        <button onClick={sumar}>Sumar</button>
        <h1> {contador} </h1>
        <button onClick={restar}>Restar</button>
        <Button variant="outlined" onClick={ () => onAdd(contador)}>
          Agregar al carrito
        </Button>
      </div>
    );
};