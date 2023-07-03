import Container from "react-bootstrap/Container";
import "./Shop.css";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import StoreContent from "../StoreContent/StoreContent";

const Shop = (props) => {
  let params = useParams();

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
      return "Shop";
    }
  };

  const getPath = () => {
    let name = getSectionName(params.section);

    if (name == "Shop") {
      return [{ url: "/shop/home", name: name }];
    }

    let path = { url: "/shop/" + params.section, name: name };
    const paths = [{ url: "/shop/home", name: "Shop" }, path];

    return paths;
  };

  const getStorePage = () => {
    if (getSectionName(params.section) == "Shop") {
      return (
        <Container>
          <h5>Computer Parts</h5>
          <ul>
            <li>
              <a href="/SEG3125-Project2-Step3/shop/cpu">CPU</a>
            </li>
            <li>
              <a href="/SEG3125-Project2-Step3/shop/motherboard">Motherboard</a>
            </li>
            <li>
              <a href="/SEG3125-Project2-Step3/shop/powersupply">
                Power Supply
              </a>
            </li>
            <li>
              <a href="/SEG3125-Project2-Step3/shop/memory">Memory</a>
            </li>
          </ul>
          <br />
          <h5>PC Cooling</h5>
          <ul>
            <li>
              <a href="/SEG3125-Project2-Step3/shop/fans">Fans</a>
            </li>
            <li>
              <a href="/SEG3125-Project2-Step3/shop/cooling">Liquid Cooling</a>
            </li>
          </ul>
        </Container>
      );
    } else {
      return (
        <StoreContent
          criteria={[
            { title: "Price", categories: ["$1", "$2", "$3"] },
            { title: "Brand", categories: ["Intel", "AMD"] },
          ]}
        />
      );
    }
  };

  return (
    <div>
      <Container>
        <Breadcrumbs paths={getPath()} />
        <h1>{getSectionName(params.section)}</h1>
        <div>{getStorePage()}</div>
      </Container>
    </div>
  );
};

export default Shop;
