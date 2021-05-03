import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import Product from "./Product";
import { Spinner, Container, Row, Col } from "react-bootstrap";

function ProductList({ setProduct }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prodcuts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <Row className="row hidden-md-up">
        {products.length > 0 ? (
          products.map((product) => (
            <Col
              key={product._id}
              className="col-md-3"
              style={{ paddingBottom: "7px" }}
            >
              <Product product={product} setProduct={setProduct} />
            </Col>
          ))
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Row>
    </Container>
  );
}

export default ProductList;
