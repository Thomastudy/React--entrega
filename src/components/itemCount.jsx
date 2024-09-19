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
        {count > 1 ? (
          <button className="btn--decrease" onClick={handleDecrease}>
            -
          </button>
        ) : (
          <button className="btn--disabled">-</button>
        )}
        <span>{count}</span>
        {count < stock ? (
          <button className="btn--increase" onClick={handleIncrease}>
            +
          </button>
        ) : (
          <button className="btn--disabled">+</button>
        )}
        <br />
        <button className="btn--add" onClick={handleAdd}>
          Comprar
        </button>
      </div>
    </>
  );
};
