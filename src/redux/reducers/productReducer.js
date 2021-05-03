const productReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.products.data.data;

    case "ADD_PRODUCT":
      return [...state, action.product.data.data];

    case "UPDATE_PRODUCT":
      return state.map((product) =>
        product._id === action.product.data.data._id
          ? action.product.data.data
          : product
      );

    case "DELETE_PRODUCT":
      console.log("Delete", action);
      return state.filter((product) => product._id !== action.productId);

    default:
      return state;
  }
};

export default productReducer;
