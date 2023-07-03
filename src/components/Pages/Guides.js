import Container from "react-bootstrap/Container";
import SearchCriteria from "../SearchCriteria/SearchCriteria";
import guideData from "../../data/guideData";
import CustomButton from "../ CustomButton/CustomButton";
import "../StoreContent/StoreContent.css";

const Guides = (props) => {
  const data = guideData;

  const resultNumber = data.length;

  const criteria = {
    title: "Topic",
    categories: [
      "Getting Started",
      "Part Installation",
      "Replacing Parts",
      "User Guides",
    ],
  };

  const getUrl = (id) => {
    return "/SEG3125-Project2-Step3/#/guides/guide/" + id;
  };

  return (
    <Container>
      <h1 className="py-4">Guides</h1>
      <div className="d-flex">
        <div className="flex-item width-adjustment">
          <div className="criteria-border d-flex align-items-center flex-item "></div>

          <div className="flex-fill">
            <SearchCriteria content={criteria} />
          </div>
          <div className="py-2 px-2 justify-content-center">
            <CustomButton
              title="Create a Guide"
              href="/SEG3125-Project2-Step3/#/guides/create"
            />
          </div>
        </div>

        <div className="flex-fill">
          <h5>{resultNumber} Results</h5>
          <hr />
          <Container>
            <div className="d-flex">
              <div className="flex-fill">
                {data.map((guide) => (
                  <div className="flex-item py-1">
                    <a href={getUrl(guide.id)}>{guide.title}</a>
                    <div className="flex-item">{guide.description}</div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Guides;
