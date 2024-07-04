import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Cart } from "./pages/Cart/Cart";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>
        <Route path="*" element={<h1> 404 Not found </h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
