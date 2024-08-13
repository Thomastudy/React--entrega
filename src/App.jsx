import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { CargarProductos } from "./components/productos";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={"404"} />
        </Routes>
        <CargarProductos />
      </BrowserRouter>
    </>
  );
}

export default App;
