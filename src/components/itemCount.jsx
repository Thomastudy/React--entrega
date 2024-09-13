import { useState } from "react";

export const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };
  const handleDecrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const handleAdd = () => {
    onAdd(count);
    setCount(1);
    agregadoCarrito();
  };

  const agregadoCarrito = () => {
    Swal.fire({
      position: "top-end",
      // icon: "success",
      title: "Agregado al carrtiro",
      showConfirmButton: false,
      timer: 800,
    });
  };

  return (
    <>
      <div className="item--count">
        <button onClick={handleDecrease}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrease}>+</button> <br />
        <button className="button--add" onClick={handleAdd}>
          Comprar
        </button>
      </div>
    </>
  );
};
