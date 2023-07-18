import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Aside from "../../aside/aside";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import Cards from "../../cards/Cards";
import { Link } from "react-router-dom";


const Category = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);


  console.log("filtro categoria", categoryProducts);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCategoryProducts(docs);
    };

    // Resetea el estado cuando cambia la categoría
    setCategoryProducts([]);
    getProducts();
  }, [category]);
  return (
    <div className="wrapper">
      <Aside></Aside>
      <main>
        <div className="tituloMain">
          <h2 style={{ textTransform: "Capitalize" }}>{category}</h2>
        </div>
        <div className="productos">
          {categoryProducts.map((auto) => {
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
};

export default Category;
