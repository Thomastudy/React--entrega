// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import {
  where,
  query,
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // additem context
  const { addItem } = useContext(ItemContext);

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
      ? collection(db, "prodcuts")
      : query(
          collection(db, "prodcuts"),
          where("category", "==", id.toLowerCase())
        );

    getDocs(refCollection)
      .then((snapshot) => {
        const productData = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        const sortedProducts = productData.sort((a, b) =>
          a.category.localeCompare(b.category)
        );

        setProducts(sortedProducts);
      })
      .finally(() => setLoading(false));
  }, [id]);


  if (loading)
    return (
      <div id="loader">
        <div id="box"></div>
        <div id="shadow"></div>
      </div>
    );

  return (
    <>
      {/* <Container className="mt-4">
        {products.map((i) => (
          <Card key={i.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={i.img} />
            <Card.Body>
              <Card.Title>
                <h2>{i.title}</h2>
              </Card.Title>
              <Card.Text>$ {i.price}</Card.Text>
              <Card.Text>{i.category}</Card.Text>
              <div>
                <Link to={`/item/${i.id}`}>
                  <Button variant="primary">Ver producto</Button>
                </Link>
                {/* <Button variant="secondary" onClick={() => addItem(i)}>
                  +
                </Button> 
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container> */}
      <main class="mainContenedor">
        <div class="contenedor">
          {products.map((i) => (
            <div class="producto">
              <div class="div--producto__imagen">
                <img
                  class="producto__imagen"
                  src={i.img}
                  alt="imagen ${i.title}"
                />
              </div>
              <div class="producto__informacion">
                <p class="producto__nombre">{i.title}</p>
                <p class="producto__precio-r">
                  <b>${i.price}</b>
                </p>
                <Link to={`/item/${i.id}`}>
                  <button class="button pointer" title="Pulsa para comprar">
                    Ver producto <i class="fa-regular fa-heart pointer"></i>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
