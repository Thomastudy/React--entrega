import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { Link } from "react-router-dom";

import Cart from "../assets/cart.png";

export const CartWidget = () => {
  const { items } = useContext(ItemContext);

  const quantity = items.reduce(
    (acc, i) => acc + i.quantity, 
    0
  );

  return (
    <>
      <Link to={"/cart"}>
        <img src={Cart} alt="" height={24} />
        <span>{quantity}</span>
      </Link>
    </>
  );
};
