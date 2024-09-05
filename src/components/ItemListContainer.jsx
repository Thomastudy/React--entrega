import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);
  // useEffect(() => {
  //   new Promise((res, rej) => setTimeout(res(data), 2000))

  //     .then((response) => {
  //       if (!id) {
  //         setProducts(response);
  //       } else {
  //         const filtered = response.filter(
  //           (i) => i.category.toLowerCase() === id
  //         );
  //         setProducts(filtered);
  //       }
  //     })
  //     .finally(() => setLoading(false));
  // }, [id]);

  if (loading) return "wait";

  return (
    <>
      <Container className="mt-4">
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
                </Button> */}
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};
