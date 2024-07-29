import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";


export const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const { id } = useParams();

  const [item, setItem] = useState({});

  let initial = getQuantityById(id);  

  useEffect(() => {
    let productsCollection = collection (db, "products");
    let refDoc = doc(productsCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItem({...res.data(), id: res.id}));
  }, [id]);

  const onAdd = (quantity) => {
    let arrayFinal = { ...item, quantity: quantity};
    addToCart(arrayFinal);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu producto fue agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial}/>;
};

