import useCount from "./useCount";
import "./Count.css";
import React, { useContext } from "react";
import { CartContext } from "../CartShop/CartShop";

const Counter = (id, price) => {
  const { counter, increment, decrement } = useCount();
  const {cart, setCart} = useContext(CartContext);

  const addToCart = () => {
    setCart((currentItems) => {
      const isItemsFound = currentItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <div className="botonCantidad">
      <h2 className="titleCant">Cantidad: {counter}</h2>
      <div className="botonIncrement">
        <button className="botonMas" onClick={increment}>
          +
        </button>
        <button className="botonMenos" onClick={decrement}>
          -
        </button>
        <button className="botonReset" onClick={addToCart}>
          agregar
        </button>
        <button className="botonReset" onClick={removeItem}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default Counter;
