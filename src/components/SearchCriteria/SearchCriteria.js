import "./SearchCriteria.css";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

const SearchCriteria = (props) => {
  return (
    <Accordion defaultActiveKey="0" className="criteria-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>{props.content.title}</h5>
        </Accordion.Header>
        <Accordion.Body>
          <Form>
            <div key={`default-checkbox`} className="mb-3">
              {props.content.categories.map((category) => (
                <Form.Check type="checkbox" id={category} label={category} />
              ))}
            </div>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SearchCriteria;
