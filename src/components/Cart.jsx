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
      <div className="contenedorCheckOut">
        <button className="button" onClick={reset}>
          Vaciar carrito
        </button>
        {items.map((product) => {
          return (
            <div key={product.id} className="listado">
              <img
                className="producto__imagen"
                src={`${product.img}`}
                alt={`=> foto de  ${product.title}`}
                height={200}
              />
              <div className="checkout--listado--info">
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
                <p>Cantidad: {product.quantity}</p>
              </div>
              <button
                className="boton-eliminar"
                onClick={() => removeItem(product.id)}
              >
                ⛔️
              </button>
            </div>
          );
        })}
      </div>
      <div className="total--compra">
        <p>Total: ${total}</p>
      </div>
      <form action="" className="form--compra">
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
        <button type="button" className="button" onClick={sendOrder}>
          Comprar
        </button>
      </form>
    </>
  );
};
