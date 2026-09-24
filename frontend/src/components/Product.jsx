import { Card } from "react-bootstrap";
import Rating from "./Ratings";
function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounds">
      <Card.Img src={product.image} variant="top" />
      <Card.Body>
        <Card.Title>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as="h4">${product.price}</Card.Text>
        <Card.Text as="div">
          <Rating value={product.rating} text={product.numReviews} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
