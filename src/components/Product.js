function Product(props) {
  const { _id, name, image, price } = props.product;
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <p>
          <span className="bold-text">Name : </span>
          {name}
        </p>
        <p>
          <span className="bold-text">Price : </span>
          {price}
        </p>
      </div>
      <div className="product-btns">
        <button className="btn-del" onClick={() => props.delProduct(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Product;
