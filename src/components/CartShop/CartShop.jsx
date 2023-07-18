// import { useParams } from "react-router-dom";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../firebase/firebaseConfig";
// import Cards from "../components/cards/Cards";
// import { Link } from "react-router-dom";

import React, { useEffect, createContext, useState } from "react";
import Aside from "../aside/aside";

export const CartContext = createContext([]);

const CartShop = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <Aside></Aside>
      <main>
        <div className="tituloMain">
          <h1 style={{ color: "black" }}>Shop</h1>
        </div>
        <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>
      </main>
    </div>
  );
};

export default CartShop;

