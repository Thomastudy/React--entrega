import Container from "react-bootstrap/Container";

import data from "../data/productos.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(data), 2000))
      .then((response) => {
        const finded = response.find((i) => i.id === Number(id));
        setProduct(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);

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
      </Container>
    </>
  );
};
