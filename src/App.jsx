import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />

      <ItemListContainer
        greeting={
          "Hola humano, ¿listo para ver las mejores piezas de cerámica?"
        }
      />
    </div>
  );
}

export default App;
