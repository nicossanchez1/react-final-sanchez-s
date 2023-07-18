import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Category from "./components/pages/category/Category";
import { ShoppingCartProvider } from "./context/ItemsContext";
import CartShop from "./components/CartShop/CartShop";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <BrowserRouter>
          <></>
          <div className="container-fluid containerCard">
            <div className="row">
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:categoryId/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/Category/:category" element={<Category />} />
                <Route path="/CartShop" element={<CartShop />} />
                {/* <Route path='*' element={<h1>404 NOT FOUND</h1>} /> */}
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;