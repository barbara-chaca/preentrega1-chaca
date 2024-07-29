import "./itemList.css";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FadeLoader } from "react-spinners";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    
    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }  
 
    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    });
  }, [name]);

  if (items.length === 0) {
    return(
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        }}>
        <FadeLoader color="#bca534" margin={5} /> 
        </div>
    );
  };

  return <ItemList items={items} />;
};