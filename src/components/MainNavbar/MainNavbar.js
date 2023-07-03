import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MainNavbar.css";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";

const MainNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Nav className="d-flex justify-content-start">
            <Navbar.Brand href="/SEG3125-Project2-Step3/#">
              <img
                src={logo}
                width="80"
                height="50"
                className="d-inline-block align-center"
                alt="PC Logo"
              />
              <div className="px-2 d-inline-block">CustomPC</div>
            </Navbar.Brand>
          </Nav>

          <Nav className="d-flex justify-content-end">
            <Nav.Link
              href="/SEG3125-Project2-Step3/#/guides"
              className="align-center"
            >
              <u>Guides</u>
            </Nav.Link>
            <Nav.Link href="">
              <u>Sign In / Register</u>
            </Nav.Link>
            <Navbar.Brand href="">
              <img
                src={cart}
                width="50"
                height="50"
                className="d-inline-block align-center"
                alt="PC Logo"
              />
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="navbar-lower">
        <Container>
          <NavDropdown title="Shop" id="shop-dropdown">
            <div className="header">Computer Parts</div>
            <NavDropdown.Item href="/SEG3125-Project2-Step3/#/shop/cpu">
              CPU
            </NavDropdown.Item>
            <NavDropdown.Item href="/SEG3125-Project2-Step3/#/shop/motherboard">
              Motherboard
            </NavDropdown.Item>
            <NavDropdown.Item href="/SEG3125-Project2-Step3/#/shop/powersupply">
              Power Supply
            </NavDropdown.Item>
            <NavDropdown.Item href="/SEG3125-Project2-Step3/#/shop/memory">
              Memory
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <div className="header">PC Cooling</div>
            <NavDropdown.Item href="/SEG3125-Project2-Step3/#/shop/fans">
              Fans
            </NavDropdown.Item>
            <NavDropdown.Item href="/SEG3125-Project2-Step3/#/shop/cooling">
              Liquid Cooling
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
