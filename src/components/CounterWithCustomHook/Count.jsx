import useCount from "./useCount";
import "./Count.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/ItemsContext";

const Counter = ({ auto }) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    const { id, price, name, img } = auto;

    setCart((currentItems) => {
      const isItemsFound = currentItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1, price, name, img  };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItems, { id, quantity: 1, price, name, img }];
      }
    });
  };

  const removeItem = () => {
    setCart((currentItems) => {
      const isItemsFound = currentItems.find((item) => item.id === auto.id);
      if (isItemsFound) {
        return currentItems.map((item) => {
          if (item.id === auto.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
      return currentItems;
    });
  };
  return (
    <div className="botonCantidad">
      <h3 className="titleCant">¿Desea agregar a su carrito? </h3>
      <div className="botonIncrement">
        <button className="botonAgregar" onClick={addToCart}>
          Agregar al carrito
        </button>
        <button className="botonAgregar" onClick={removeItem}>
          Restar producto
        </button>
      </div>
    </div>
  );
};

export default Counter;
