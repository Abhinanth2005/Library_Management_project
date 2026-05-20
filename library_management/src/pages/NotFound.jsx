import { Link } from "react-router-dom";

const NotFound = () => {

  return (

    <div
      className="d-flex
                 flex-column
                 justify-content-center
                 align-items-center
                 vh-100"
    >

      <h1 className="display-1 fw-bold">
        404
      </h1>

      <p className="lead">
        Page Not Found
      </p>

      <Link
        to="/"

        className="btn btn-dark mt-3"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFound;