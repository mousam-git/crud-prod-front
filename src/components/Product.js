import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";
import { Card, Button } from "react-bootstrap";

function Product({ product, setProduct }) {
  const dispatch = useDispatch();
  const { _id, name, image, price } = product;

  const handleUpdate = () => {
    setProduct(product);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Price : {price}</Card.Subtitle>
      </Card.Body>
      <Card.Body className="justify-content-center">
        <Button
          style={{ padding: "5px 15px", margin: "0px 5px" }}
          variant="primary"
          onClick={handleUpdate}
        >
          Update
        </Button>
        <Button
          style={{ padding: "5px" }}
          variant="danger"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
