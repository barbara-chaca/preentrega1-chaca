import "./itemListContainer.css";
import { products } from "../../products";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";

export const ItemListContainer = () => {
  // una peticion que me traiga los productos del backend

  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(products);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    // manejar la promesa
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return <ItemList items={items} />;
};
