import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import Cards from "../../cards/Cards";
import Aside from "../../aside/aside";
import Counter from "../../CounterWithCustomHook/Count";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    getProducts();
  }, [id]);
  return (
    <div className="wrapper">
      <Aside></Aside>
      <main>
        <div className="tituloMain">
          <b>Detalle del producto</b>
        </div>
        <div className="productos">
          {productsData.map((auto) => {
            return (
              <div key={auto.id} style={{ display: "flex", justifyContent: "center", margin: 0, width: 1080, padding: 100 }}>
                <Cards auto={auto}></Cards>
                <Counter auto={auto}  />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ItemDetailContainer;
