import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import data from "../data/productos.json";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((res, rej) => setTimeout(res(data), 2000))

      .then((response) => {
        if (!id) {
          setProducts(response);
        } else {
          const filtered = response.filter(
            (i) => i.category.toLowerCase() === id
          );
          setProducts(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "wait";

  return (
    <>
      <Container className="mt-4">
        {products.map((i) => (
          <Card key={i.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={i.img} />
            <Card.Body>
              <Card.Title>{i.title}</Card.Title>
              <Card.Text>{i.category}</Card.Text>
              <Link to={`/item/${i.id}`}>
                <Button variant="primary">Comprar</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};
