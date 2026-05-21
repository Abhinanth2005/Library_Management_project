import { useState } from "react";

import axios from "../api/axios";

import { Link, useNavigate }
from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
      password: "",
    });

  const [errors, setErrors] =
    useState({});

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value,
    });
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await axios.post(
      "users/register/",
      formData
    );

    alert(
      "Signup Successful"
    );

    navigate("/login");

  } catch (error) {

    console.log(
      error.response.data
    );

    alert("Signup Failed");
  }
};

  return (

    <div className="container-fluid">

      <div className="row vh-100">

        <div
          className="
          col-lg-6
          d-none
          d-lg-flex
          align-items-center
          justify-content-center
          bg-dark
          text-white"
        >

          <div>

            <h1
              className="
              display-4 fw-bold"
            >

              Create Account

            </h1>

            <p className="lead">

              Join Library System

            </p>

          </div>

        </div>

        <div
          className="
          col-lg-6
          d-flex
          justify-content-center
          align-items-center"
        >

          <form
            onSubmit={handleSubmit}
            className="w-75"
          >

            <h2
              className="
              mb-4 fw-bold"
            >

              Signup

            </h2>

            {
              errors.api && (

                <div
                  className="
                  alert alert-danger"
                >

                  {errors.api}

                </div>
              )
            }

            <div className="mb-3">

              <input
                type="text"

                name="username"

                placeholder="Username"

                className="
                form-control"

                value={
                  formData.username
                }

                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <input
                type="email"

                name="email"

                placeholder="Email"

                className="
                form-control"

                value={
                  formData.email
                }

                onChange={handleChange}
              />

            </div>

            <div className="mb-4">

              <input
                type="password"

                name="password"

                placeholder="Password"

                className="
                form-control"

                value={
                  formData.password
                }

                onChange={handleChange}
              />

            </div>

            <button
              type="submit"

              className="
              btn btn-dark w-100"

              disabled={loading}
            >

              {
                loading
                ? "Creating..."
                : "Signup"
              }

            </button>

            <p
              className="
              mt-3 text-center"
            >

              Already have account?

              <Link to="/">
                {" "}Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Signup;