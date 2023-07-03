import "./ProductCard.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Stars from "../Stars/Stars";

const ProductCard = (props) => {
  let product = {
    name: props.product.name,
    image: props.product.image,
    rating: props.product.rating,
    price: props.product.price,
    status: props.product.status,
  };

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Stars rating={product.rating} />
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.status}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductCard;
