import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../redux/actions/productActions";
import { Jumbotron, Form, Col, Button } from "react-bootstrap";

function AddProduct({ product, setProduct }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // check add or update
    if (product._id) {
      const id = product._id;
      const updatedProdcut = {
        name: product.name,
        price: product.price,
        image: product.image,
      };
      dispatch(updateProduct(updatedProdcut, id));
    } else {
      dispatch(addProduct(product));
    }
    setProduct({ name: "", price: "", image: "" });
  };

  return (
    <Jumbotron fluid>
      <Form onSubmit={handleSubmit}>
        <Form.Row className="d-flex justify-content-center">
          <Col xs="auto">
            <Form.Label htmlFor="name" srOnly>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="name"
              name="name"
              placeholder="name"
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="price" srOnly>
              Price
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="price"
              name="price"
              placeholder="price"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="price" srOnly>
              Image
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="image"
              name="image"
              placeholder="image url"
              type="text"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
          </Col>

          <Col xs="auto">
            <Button type="submit" className="mb-2">
              {product._id ? "Update" : "Add"}
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Jumbotron>
  );
}

export default AddProduct;
