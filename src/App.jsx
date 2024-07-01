import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./pages/Cart/Cart";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer/>} />     
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail" element={<ItemDetailContainer />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );  
}

export default App;
