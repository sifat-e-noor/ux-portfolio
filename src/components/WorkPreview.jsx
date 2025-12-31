import { Link } from "react-router-dom";

function WorkPreview({ id, title, role, description }) {
  return (
    <article className="work-preview">
      <h3>{title}</h3>
      <p className="work-role">{role}</p>
      <p>{description}</p>
      <Link to={`/work/${id}`}>
        Read case study
      </Link>
    </article>
  );
}

export default WorkPreview;
