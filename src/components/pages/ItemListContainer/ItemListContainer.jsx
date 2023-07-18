import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import Cards from "../../cards/Cards";
import Aside from "../../aside/aside";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";



function ItemListContainer() {
  const [products, setProducts] = useState([]);
  console.clear();
  console.log("productos", products);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();

  }, []);
  return (
    <div className="wrapper">
      <Aside></Aside>
      <main>
        <div className="tituloMain">
          <b style={{ textTransform: "Capitalize" }}>Todos los productos</b>
        </div>
        <div className="productos">
          {products.map((auto) => {
            return (
              <div style={{ margin: 10 }} key={auto.id}>
                <Link to={`detail/${auto.id}`}>
                  <Cards auto={auto} />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default ItemListContainer;

// <Counter />
