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

  if (loading)
    return (
      <div id="loader">
        <div id="box"></div>
        <div id="shadow"></div>
      </div>
    );

  

  return (
    <>
      <div className="prod-detail ">
        <div className="prod-detail--img">
          <img
            src={`${product.img}`}
            alt={`=> foto de  ${product.title}`}
            height={200}
          />
        </div>
        <div className="prod-detail--info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <p>Stock: {product.stock}</p>

          <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};
