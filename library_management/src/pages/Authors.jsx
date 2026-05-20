import { useEffect, useState } from "react";

import axios from "../api/axios";

import Navbar from "../components/Navbar";

const Authors = () => {

  const [authors, setAuthors] =
    useState([]);

  const fetchAuthors = async () => {

    try {

      const response = await axios.get(
        "authors/"
      );

      setAuthors(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchAuthors();

  }, []);

  return (

    <>
      <Navbar />

      <div className="container py-5">

        <h3 className="fw-bold mb-4 text-info text-decoration-underline">
          Authors
        </h3>

        <div className="row g-4">

          {
            authors.map((author) => (

              <div
                className="col-lg-4
                           col-md-6"

                key={author.id}
              >

                <div
                  className="card
                             shadow-sm
                             border-0
                             h-100"
                >

                  <div className="card-body">

                    <h4 className="fw-bold">

                      {author.name}

                    </h4>

                    <p className="text-muted">

                      {author.email}

                    </p>

                    <p>

                      {author.bio}

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

export default Authors;