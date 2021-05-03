import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  const [product, setProduct] = useState({ name: "", price: "", image: "" });

  return (
    <div className="app-container">
      <AddProduct product={product} setProduct={setProduct} />
      <ProductList setProduct={setProduct} />
    </div>
  );
}

export default App;
