import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";

const Stars = (props) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(<FontAwesomeIcon icon={filledStar} />);
    } else {
      stars.push(<FontAwesomeIcon icon={outlineStar} />);
    }
  }

  return stars;
};

export default Stars;
