import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [reqData, setReqData] = useState(new Date());
  // const [isLoading, setIsLoading] = useState(true);

  // get all the products
  const getProducts = async () => {
    try {
      const productList = await axios.get(
        "https://crud-prod-back.herokuapp.com/api"
      );
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
      const res = await axios.post(
        "https://crud-prod-back.herokuapp.com/api",
        data,
        config
      );
      console.log(res);
      setReqData(new Date());
    } catch (err) {
      console.log(err);
    }
  };

  const delProduct = async (productId) => {
    const product = await axios.delete(
      `https://crud-prod-back.herokuapp.com/api/${productId}`
    );
    console.log(product);
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
