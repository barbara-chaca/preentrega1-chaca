import { useEffect, useState } from "react";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

