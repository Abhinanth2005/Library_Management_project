import { Link } from "react-router-dom";

const Sidebar = () => {

  return (

    <div className="sidebar">

      <h2>
        Library
      </h2>

      <ul>

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/books">
            Books
          </Link>
        </li>

        <li>
          <Link to="/authors">
            Authors
          </Link>
        </li>

        <li>
          <Link to="/borrow">
            Borrow Books
          </Link>
        </li>

        <li>
          <Link to="/my-books">
            My Books
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;