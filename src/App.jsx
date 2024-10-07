import { BrowserRouter, Routes, Route } from "react-router-dom";
// // importacion para firebase
// import { getDoc, getFirestore, collection } from "firebase/firestore";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

import { Provider } from "./contexts/ItemContext";
import { Cart } from "./components/Cart";
import { AdminPage } from "./components/AdminPage";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          {location.pathname !== "/haliadmin" && <Header />}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/category/:id" element={<ItemListContainer />} />

            <Route path="/item/:id" element={<ItemDetailContainer />} />

            <Route path="/haliadmin" element={<AdminPage />} />

            <Route path="*" element={"404"} />
          </Routes>

          {location.pathname !== "/haliadmin" && <Footer />}
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
