import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { Link } from "react-router-dom";

import Cart from "../assets/shopbag.svg";

export const CartWidget = () => {
  const { items } = useContext(ItemContext);

  const quantity = items.reduce((acc, i) => acc + i.quantity, 0);

  const carritoVacio = () => {
    Swal.fire({
      position: "top-end",
      // icon: "success",
      title: "El carrito se encuentra vacio",
      showConfirmButton: false,
      timer: 800,
    });
  };

  return (
    <>
      {quantity > 0 ? (
        <Link to={"/cart"}>
          <div className="imgCarro" id="imgCarro">
            <img src={Cart} className="pointer carrito" alt="carrito" />
            <span className="pContador">{quantity}</span>
          </div>
        </Link>
      ) : (
        <div className="imgCarro" id="imgCarro">
          <img
            src={Cart}
            className="pointer carrito"
            alt="carrito"
            onClick={carritoVacio}
          />
        </div>
      )}
    </>
  );
};
