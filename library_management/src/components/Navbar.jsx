import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (

    <nav className="navbar bg-light text-white d-flex justify-content-between align-items-center px-4">

      <div className="logo text-primary fw-bold fs-2">
        Library System
      </div>

      <div className="nav-links">

        <Link to="/dashboard" className="">
          Dashboard
        </Link>

        <Link to="/books">
          Books
        </Link>

        <Link to="/authors">
          Authors
        </Link>

        <Link to="/borrow">
          Borrow
        </Link>

        <Link to="/my-books">
          My Books
        </Link>

        {
          token && (

            <button
              className="logout-btn btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          )
        }

      </div>

    </nav>
  );
};

export default Navbar;