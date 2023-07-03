import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import CustomButton from "../ CustomButton/CustomButton";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const CreateGuide = () => {
  const getPath = () => {
    const paths = [
      { url: "/guides", name: "Guides" },
      { url: "", name: "Create Guide" },
    ];

    return paths;
  };

  return (
    <div>
      <Container>
        <Breadcrumbs paths={getPath()} />
        <div className="d-flex">
          <div className="flex-fill">
            <h2 className="flex-item">Create a Guide</h2>
            <div className="flex-item py-2">Title</div>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Guide Title"
                aria-label="Title"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <h5 className="flex-item py-2">Guide Content</h5>

            <InputGroup>
              <Form.Control as="textarea" aria-label="Content" />
            </InputGroup>

            <div className="flex-item py-4">
              <CustomButton title="Upload Guide" href="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateGuide;
