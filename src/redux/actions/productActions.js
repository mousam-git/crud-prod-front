import axios from "axios";
import { url } from "../../api";

// Get All The Products
export const getProducts = () => {
  return (dispatch, getState) => {
    axios
      .get(url)
      .then((products) => {
        dispatch({
          type: "GET_PRODUCTS",
          products,
        });
      })
      .catch((err) => console.log(err));
  };
};

// Add Product
export const addProduct = (product) => {
  return (dispatch, getState) => {
    axios
      .post(url, product)
      .then((product) => {
        dispatch({
          type: "ADD_PRODUCT",
          product,
        });
      })
      .catch((err) => console.log(err));
  };
};

// Update Product
export const updateProduct = (updatedProduct, productId) => {
  return (dispatch, getState) => {
    axios
      .patch(`${url}/${productId}`, updatedProduct)
      .then((product) => {
        dispatch({ type: "UPDATE_PRODUCT", product });
      })
      .catch((err) => console.log(err));
  };
};

// Delete Product
export const deleteProduct = (productId) => {
  return (dispatch, getState) => {
    axios
      .delete(`${url}/${productId}`)
      .then(() => {
        dispatch({
          type: "DELETE_PRODUCT",
          productId,
        });
      })
      .catch((err) => console.log(err));
  };
};
