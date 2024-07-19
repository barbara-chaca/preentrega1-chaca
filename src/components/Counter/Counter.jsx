import { Button } from "@mui/material";
import "./Counter.css";

export const Counter = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div className="contadorStyle">
      <button className="boton" onClick={sumar}> + </button>
      <h1> {contador} </h1>
      <button className="boton" onClick={restar}> - </button>
      <div>
        <Button
          className="agregarAlCarrito"
          variant="outlined"
          sx={{
            backgroundColor: "#A9B388",
            color: "black",
            borderColor: "#A9B388",
            "&:hover": {
              backgroundColor: "#99a576",
              borderColor: "#99a576",
            },
          }}
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
