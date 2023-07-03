import Stars from "../Stars/Stars";
import Container from "react-bootstrap/Container";

const Review = (props) => {
  return (
    <Container>
      <div className="d-flex">
        <div className="flex-fill">
          <h3 className="flex-item">{props.review.reviewer}</h3>
          <div className="flex-item">
            <Stars rating={props.review.rating}></Stars>
          </div>
          <div className="flex-item">{props.review.body}</div>
        </div>
      </div>
    </Container>
  );
};

export default Review;
