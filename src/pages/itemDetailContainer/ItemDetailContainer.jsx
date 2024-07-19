import { useContext, useEffect, useState } from "react";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../context/CartContext";


export const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const { id } = useParams();

  const [item, setItem] = useState({});

  let initial = getQuantityById(+id);  

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    let arrayFinal = { ...item, quantity: quantity};
    addToCart(arrayFinal);
    
  }

  return <ItemDetail item={item} onAdd={onAdd} initial={initial}/>;
};

