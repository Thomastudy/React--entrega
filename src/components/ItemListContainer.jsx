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

    setLoading(true);
    const refCollection = !id
      ? collection(db, "products")
      : query(
          collection(db, "products"),
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


        const listProducts = sortedProducts.filter((prod) => prod.stock >= 1 )

        setProducts(listProducts);
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
      <main className="mainContenedor">
        <div className="contenedor">
          {products.map((i) => (
            <div key={i.id} className="producto">
              <div className="div--producto__imagen">
                <img
                  className="producto__imagen"
                  src={i.img}
                  alt="imagen ${i.title}"
                />
              </div>
              <div className="producto__informacion">
                <p className="producto__nombre">{i.title}</p>
                <p className="producto__precio-r">
                  <b>${i.price}</b>
                </p>
                <Link to={`/item/${i.id}`}>
                  <button className="button pointer" title="Pulsa para comprar">
                    Ver producto <i className="fa-regular fa-heart pointer"></i>
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
