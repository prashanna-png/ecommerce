import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Ratings";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Card.Title className="product-title">
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <strong>{product.name}</strong>
          </Link>
        </Card.Title>

        <Card.Text as="h4">${product.price}</Card.Text>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;