import { useState, createContext } from "react";

export const CartContext = createContext(null);


export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>;
};

// const initialState = () => [

// ];

// export const ItemsProvider = ({ children }) => {

//   const [items, setItems] = useState(initialState);
//   console.log(items);
//   return (
//     <ItemsContext.Provider value={[items, setItems]}>
//       {children}
//     </ItemsContext.Provider>
//   );
// };

// nnn

