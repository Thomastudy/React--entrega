import { BrowserRouter, Routes, Route } from "react-router-dom";
// // importacion para firebase
// import { getDoc, getFirestore, collection } from "firebase/firestore";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

import { Provider } from "./contexts/ItemContext";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/category/:id" element={<ItemListContainer />} />

            <Route path="/item/:id" element={<ItemDetailContainer />} />

            <Route path="*" element={"404"} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
