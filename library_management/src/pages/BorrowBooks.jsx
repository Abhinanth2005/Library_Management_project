import { useEffect, useState } from "react";

import axios from "../api/axios";

import Navbar from "../components/Navbar";

const BorrowBooks = () => {

  const [borrowedBooks,
         setBorrowedBooks] =
    useState([]);

  const fetchBorrowedBooks =
    async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          "borrow/",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setBorrowedBooks(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchBorrowedBooks();

  }, []);

  return (

    <>
      <Navbar />

      <div className="container py-5">

        <h3 className="fw-bold mb-4 text-decoration-underline text-warning">
          Borrowed Books
        </h3>

        <div className="row g-4">

          {
            borrowedBooks.map(
              (item) => (

              <div
                className="col-lg-4
                           col-md-6"

                key={item.id}
              >

                <div
                  className="card
                             shadow-sm
                             border-0
                             h-100"
                >

                  <div className="card-body">

                    <h4 className="fw-bold">

                      {
                        item.book_title
                      }

                    </h4>

                    <p>

                      Borrowed At:
                    </p>

                    <p
                      className="text-muted"
                    >

                      {
                        item.borrowed_at
                      }

                    </p>

                    <p>

                      Status:

                      {
                        item.returned
                        ? (
                          <span
                           className="
                           text-success"
                          >
                            {" "}Returned
                          </span>
                        )
                        : (
                          <span
                           className="
                           text-danger"
                          >
                            {" "}Not Returned
                          </span>
                        )
                      }

                    </p>

                  </div>

                </div>

              </div>
            ))
          }

        </div>

      </div>
    </>
  );
};

export default BorrowBooks;