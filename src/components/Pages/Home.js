import Container from "react-bootstrap/Container";
import "./Home.css";
import computerImage from "../../assets/computerImage.webp";
import CustomButton from "../ CustomButton/CustomButton";

const Home = () => {
  return (
    <div>
      <Container>
        <div className="textbox d-flex">
          <div className="p-4 flex-fill">
            <h2>Your PC, Your Parts</h2>
            <CustomButton title="Shop" href="/shop/home" />
            <div className="margin"></div>
            <h2>First PC?</h2>
            <CustomButton title="Guides" href="/guides" />
          </div>

          <img
            src={computerImage}
            width="750"
            height="500"
            className="flex-item"
            alt="PC image"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
