import { useEffect, useState } from "react";
import arrayProductos from "../data/productos.json";
import gifCarga from "../assets/productos/arosamor.jpg";

export const CargarProductos = () => {
  const [producto, setproducto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((res, rej) => {
      setTimeout(() => res(arrayProductos), 30);
    })
      .then((response) => {
        setproducto(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <img src={gifCarga} />;
  }
};
