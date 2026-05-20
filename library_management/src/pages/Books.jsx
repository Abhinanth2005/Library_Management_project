import { useEffect, useState } from "react";

import axios from "../api/axios";

import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

const Books = () => {

  const [books, setBooks] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const fetchBooks = async () => {

    try {
      const response = await axios.get(
        "books/"
      );

      setBooks(response.data);

    } 
    catch (error) {
     console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchBooks();

  }, []);

  const filteredBooks =
    books.filter((book) =>
      book.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (

    <>
      <Navbar />

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">

          <h3 className="fw-bold text-dark text-decoration-underline">
            Books
          </h3>

          <div style={{ width: "500px" }} >

            <SearchBar
              search={search}
              setSearch={setSearch}
              className ="border border-info"
            />

          </div>

        </div>

        {
          loading ? (

            <Loader />

          ) : (

            <div className="row g-4">

              {
                filteredBooks.map((book) => (

                  <div
                    className="col-lg-4
                               col-md-6
                               col-sm-12"

                    key={book.id}
                  >

                    <BookCard
                      book={book}
                      fetchBooks={fetchBooks}
                    />

                  </div>
                ))
              }

            </div>
          )
        }

      </div>
    </>
  );
};

export default Books;