import { useContext, useState } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);

  const { items, removeItem, reset } = useContext(ItemContext);

  const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderColection = collection(db, "orders");

    addDoc(orderColection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada");
        }
      })
      .finally(() => {
        reset();
        setBuyer(initialValues);
      });
  };

  const handleChange = (ev) => {
    setBuyer((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  if (items.length === 0) {
    return "volver al menu principal";
  }

  return (
    <>
      <button onClick={reset}>Vaciar</button>
      {items.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img
              src={`${product.img}`}
              alt={`=> foto de  ${product.title}`}
              height={200}
            />
            <br />
            <h2>${product.price}</h2>
            <p>Cantidad: {product.quantity}</p>
            <button onClick={() => removeItem(product.id)}>eliminar</button>
          </div>
        );
      })}
      <div>Total: ${total}</div>
      <form action="">
        <div>
          <label>Nombre:</label>
          <input
            value={buyer.name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            value={buyer.email}
            name="email"
            type="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Telefono:</label>
          <input
            value={buyer.phone}
            name="phone"
            type="tel"
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={sendOrder}>
          Comprar
        </button>
      </form>
    </>
  );
};
