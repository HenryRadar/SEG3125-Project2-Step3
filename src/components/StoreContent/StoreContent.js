import Container from "react-bootstrap/Container";
import "./StoreContent.css";
import SearchCriteria from "../SearchCriteria/SearchCriteria";
import ProductCard from "../ProductCard/ProductCard";
import productData from "../../data/productData";

const StoreContent = (props) => {
  const data = productData;

  const resultNumber = productData.length;

  const getUrl = (id) => {
    return "/shop/details/" + id;
  };

  return (
    <Container>
      <div className="d-flex">
        <div className="flex-item width-adjustment">
          <div className="criteria-border d-flex align-items-center flex-item "></div>

          <div className="flex-fill">
            {props.criteria.map((content) => (
              <SearchCriteria content={content} />
            ))}
          </div>
        </div>

        <div className="flex-fill">
          <h5>{resultNumber} Results</h5>
          <hr />
          <Container>
            <div className="d-flex flex-row align-items-left flex-wrap">
              {data.map((product) => (
                <div className="mx-2 my-4">
                  <a href={getUrl(product.id)}>
                    <ProductCard product={product} />
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default StoreContent;
