import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Cart } from "./pages/Cart/Cart";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { Checkout } from "./pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout/" element={<Checkout />} />
          </Route>
          <Route path="*" element={<h1> 404 Not found </h1>} />
        </Routes>
      </CartContextProvider>  
    </BrowserRouter>
  );
};

export default App;
