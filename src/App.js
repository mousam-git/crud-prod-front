import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [reqData, setReqData] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  // get all the products
  const getProducts = async () => {
    try {
      const productList = await axios.get("http://127.0.0.1:5500/api");
      setProducts(productList.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // add a product
  const addProduct = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("http://127.0.0.1:5500/api", data, config);
      setReqData(new Date());
    } catch (err) {
      console.log(err);
    }
  };

  const delProduct = async (productId) => {
    const product = await axios.delete(
      `http://127.0.0.1:5500/api/${productId}`
    );
    setReqData(new Date());
  };

  useEffect(() => {
    getProducts();
  }, [reqData]);

  return (
    <div className="app-container">
      <AddProduct addProduct={addProduct} />
      <ProductList products={products} delProduct={delProduct} />
    </div>
  );
}

export default App;
