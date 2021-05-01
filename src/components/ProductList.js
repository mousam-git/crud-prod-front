import Product from "./Product";

function ProductList({ products, delProduct }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product._id} product={product} delProduct={delProduct} />
      ))}
    </div>
  );
}

export default ProductList;
