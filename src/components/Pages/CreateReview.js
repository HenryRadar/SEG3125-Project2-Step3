import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import productData from "../../data/productData";
import CustomButton from "../ CustomButton/CustomButton";
import Stars from "../Stars/Stars";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CreateReview = (props) => {
  let params = useParams();

  let product = productData.filter((obj) => {
    return obj.id === parseInt(params.id);
  })[0];

  const getSectionName = (section) => {
    if (section == "cpu") {
      return "CPU";
    } else if (section == "motherboard") {
      return "Motherboard";
    } else if (section == "powersupply") {
      return "Power Supply";
    } else if (section == "memory") {
      return "Memory";
    } else if (section == "fans") {
      return "PC Fans";
    } else if (section == "cooling") {
      return "Liquid Cooling";
    } else {
      return "";
    }
  };

  const getPath = () => {
    console.log(product);
    let name = getSectionName(product.section);

    if (name == "") {
      return [{ url: "/SEG3125-Project2-Step3/#/shop/home", name: name }];
    }

    let path = {
      url: "/SEG3125-Project2-Step3/#/shop/" + product.section,
      name: name,
    };
    const paths = [
      { url: "/SEG3125-Project2-Step3/#/shop/home", name: "Shop" },
      path,
      {
        url: "/SEG3125-Project2-Step3/#/shop/details/" + product.id,
        name: "Product Details",
      },
      { url: "", name: "Review" },
    ];

    return paths;
  };

  return (
    <div>
      <Container>
        <Breadcrumbs paths={getPath()} />
        <div className="d-flex">
          <div className="flex-fill">
            <h2 className="flex-item">Leave a Review</h2>
            <div className="flex-item py-2">Product: {product.name}</div>
            <div className="flex-item py-2">
              Rating:
              <Stars rating={0} />
            </div>

            <h5 className="flex-item py-2">Comments</h5>

            <InputGroup>
              <Form.Control as="textarea" aria-label="Comments" />
            </InputGroup>

            <div className="flex-item py-4">
              <CustomButton title="Submit Review" href="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateReview;
