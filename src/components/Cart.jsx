import { useContext, useState } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { items, removeItem, reset } = useContext(ItemContext);

  const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

  const sendOrder = () => {
    if (!buyer.name || !buyer.email || !buyer.phone) {
      Swal.fire({
        title: "Datos incompletos",
        text: "Por favor, complete todos los campos del formulario.",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }
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
          finCompra(id);
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

  const navigate = useNavigate();

  if (items.length === 0) {
    navigate("/");
  }

  const finCompra = (id) =>
    Swal.fire({
      title: "Compra finalizada!",
      html: `Su orden ${id} ha sido enviada. Recibiras un Whatsapp de parte de Hali Accesorios con el cual nos contactaremos para formalizar el pago`,
      confirmButtonText: `Menu principal`,
    }).then(navigate("/"));

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="contenedorCheckOut">
        <button className="button" onClick={reset}>
          Vaciar carrito
        </button>
        {items.map((product) => {
          console.log(product);
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
        <button type="button" className="button" onClick={toggleModal}>
          Comprar
        </button>

        {isModalOpen && (
          <div className="form--div">
            <h2>Finalizar compra</h2>
            <div>
              <input
                placeholder=""
                className="form--input"
                required
                value={buyer.name}
                name="name"
                type="text"
                onChange={handleChange}
              />
              <label className="form--label">Nombre:</label>
            </div>
            <div>
              <input
                placeholder=""
                className="form--input"
                required
                value={buyer.email}
                name="email"
                type="email"
                onChange={handleChange}
              />
              <label className="form--label">Email:</label>
            </div>
            <div>
              <input
                placeholder=""
                className="form--input"
                required
                value={buyer.phone}
                name="phone"
                type="tel"
                onChange={handleChange}
              />
              <label className="form--label">Telefono:</label>
            </div>
            <button
              type="button"
              className=" btnComprar button"
              onClick={sendOrder}
            >
              Finalizar compra
            </button>
          </div>
        )}
      </form>
    </>
  );
};
