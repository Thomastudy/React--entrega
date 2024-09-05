import Container from "react-bootstrap/Container";

import { doc, getFirestore, getDocs, getDoc } from "firebase/firestore";

// import data from "../data/productos.json";
import { ItemCount } from "./itemCount.jsx";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../contexts/ItemContext.jsx";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // additem context
  const { addItem } = useContext(ItemContext);

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "prodcuts", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setProduct({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  // useEffect(() => {
  //   new Promise((resolve) => setTimeout(() => resolve(data), 2000))
  //     .then((response) => {
  //       const finded = response.find((i) => i.id === Number(id));
  //       setProduct(finded);
  //     })
  //     .finally(() => setLoading(false));
  // }, [id]);

  const onAdd = (quantity) => addItem({ ...product, quantity });

  if (loading) return "wait";

  return (
    <>
      <Container className="mt-4">
        <h1>{product.title}</h1>
        <h3>{product.category}</h3>
        <img
          src={`${product.img}`}
          alt={`=> foto de  ${product.title}`}
          height={200}
        />
        <br />
        <h2>${product.price}</h2>
        <p>Stock: {product.stock}</p>

        <ItemCount stock={product.stock} onAdd={onAdd} />
      </Container>
    </>
  );
};
