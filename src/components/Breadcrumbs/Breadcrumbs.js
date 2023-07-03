import "./Breadcrumbs.css";

const Breadcrumbs = (props) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol class="breadcrumb">
        {props.paths.map((path) => (
          <li class="breadcrumb-item">
            <a href={path.url}>{path.name}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
