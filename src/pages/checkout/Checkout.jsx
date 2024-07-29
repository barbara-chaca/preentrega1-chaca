import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { addDoc, collection, doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebaseConfig";
import {useNavigate} from "react-router-dom";


export const Checkout = () => {
    const navigate = useNavigate();
   
    const [user, setUser] = useState({ nombre:"", email: "", telefono: "" });
    const {cart, getTotalPrice, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
   
    let total = getTotalPrice();

    const envioDeFromulario = (event) => {
        event.preventDefault();
        let order = {
            buyer: user,
            items: cart,
            total: total,
        };

        let ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then((res) => setOrderId(res.id));         
           
        let productCollection = collection(db, "products");
        
        cart.forEach((elemento) => {
            let refDoc = doc(productCollection, elemento.id);
            updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
        });      
        
        clearCart ();
    
    };
   
    
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    return (
        <div>
            {orderId ? <h1> ¡Gracias por tu compra! Tu número de orden es: {orderId}</h1> :
               <div className="checkoutContainer">
                    <h2> Completa tus datos:</h2>
                    <form onSubmit={envioDeFromulario}>                        
                        <input type="text" placeholder="Ingresa tu nombre" onChange={handleChange} name="nombre"/> 
                        <input type="text" placeholder="Ingresa tu correo electrónico" onChange={handleChange} name="email"/>
                        <input type="text" placeholder="Ingresa tu teléfono" onChange={handleChange} name="telefono"/> 
                        <button className="submitButton">Comprar</button>
                        <button type="button" className="cancelButton">Cancelar</button>
                    </form>
                </div>    
            };    
        </div>
    );
};
