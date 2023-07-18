import React, { useContext, useState } from "react";
import Aside from "../aside/aside";
import { CartContext } from "../../context/ItemsContext";
import { TextField, Button } from "@mui/material";
import "./styles.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MessageAlert from "../MenssageAlert/MesaggeAlert";

const CartShop = ({ children }) => {
  const { cart } = useContext(CartContext);
  const quantity = cart ? cart.reduce((acc, current) => acc + current.quantity, 0) : 0;
  const totalPrice = cart ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) : 0;
  const initialState = {
    name: "",
    lastName: "",
    city: "",
    mail: "",
  };

  const [values, setValues] = useState(initialState);
  const [idCompra, setIdCompra] = useState(null);
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "comprobantesDeCompra"), values);
    setIdCompra(docRef.id);
    setValues(initialState);
  };
  return (
    <div className="wrapper">
      <Aside />
      <main>
        <div className="tituloMain">
          <h1 style={{ color: "black" }}>Shop</h1>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkoutSpace">
            <h2>Precio total: ${totalPrice}</h2>
            <form className="formSpace" onSubmit={onSubmit}>
              <TextField placeholder="Nombre" style={{ margin: 10, width: 400 }} name="name" value={values.name} onChange={handleOnChange} />
              <TextField placeholder="Apellido" style={{ margin: 10, width: 400 }} name="lastName" value={values.lastName} onChange={handleOnChange} />
              <TextField placeholder="Ciudad" style={{ margin: 10, width: 400 }} name="city" value={values.city} onChange={handleOnChange} />
              <TextField placeholder="Mail" style={{ margin: 10, width: 400 }} name="mail" value={values.mail} onChange={handleOnChange} />
              <Button variant="contained" color="primary" type="submit" fullWidth onClick={() => console.log(cart)}>
                Generar orden de compra
              </Button>
            </form>
            {idCompra ? <MessageAlert idCompra={idCompra} /> : null}
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default CartShop;
