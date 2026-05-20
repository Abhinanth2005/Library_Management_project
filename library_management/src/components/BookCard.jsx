import axios from "../api/axios";

import { useNavigate } from "react-router-dom";

const BookCard = ({
  book,
  fetchBooks,
}) => {

  const navigate = useNavigate();

  const borrowBook = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(
        "borrow/",
        {
          book: book.id,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert("Book Borrowed Successfully");

      fetchBooks();

      navigate("/my-books");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.detail ||
        "Borrow Failed"
      );
    }
  };

  return (

    <div
      className="card
                 shadow-sm
                 border-0
                 rounded-4
                 h-100"
    >

      <div className="card-body d-flex flex-column">

        <div
          className="d-flex
                     justify-content-between
                     align-items-start
                     mb-3"
        >

          <h4 className="fw-bold">

            {book.title}

          </h4>

          {
            book.available ? (

              <span
                className="
                badge
                bg-success"
              >
                Available
              </span>

            ) : (

              <span
                className="
                badge
                bg-danger"
              >
                Unavailable
              </span>
            )
          }

        </div>

        <p className="mb-2 text-muted">

          <strong>Author:</strong>

          {" "}

          {
            book.author_name ||
            book.author
          }

        </p>

        <p className="mb-3">

          <strong>Category:</strong>

          {" "}

          {book.category}

        </p>

        <button
          className="btn btn-dark mt-auto"

          disabled={!book.available}

          onClick={borrowBook}
        >

          {
            book.available
            ? "Borrow Book"
            : "Not Available"
          }

        </button>

      </div>

    </div>
  );
};

export default BookCard;