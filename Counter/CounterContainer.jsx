import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ onAdd, stock, initial=1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Límte de productos permitido");
    }   
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Mínimo de productos permitido");
    }
  };

  return <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd}/>;
};