import { useState } from "react";

import axios from "../api/axios";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      username: "",
      password: "",
    });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const validate = () => {

    const newErrors = {};

    if (!formData.username.trim()) {

      newErrors.username =
        "Username is required";
}

    if (!formData.password) {

      newErrors.password =
        "Password is required";

    } else if (
      formData.password.length < 4
    ) {

      newErrors.password =
        "Password must be at least 4 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

    if (errors[e.target.name]) {

      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formErrors = validate();

    if (
      Object.keys(formErrors).length > 0
    ) {

      setErrors(formErrors);

      return;
    }

    setLoading(true);

    setErrors({});

    try {

      const response =
        await axios.post(
          "token/",
          formData
        );

      console.log(response.data);

      localStorage.setItem(
        "token",
        response.data.access
      );

      localStorage.setItem(
        "refresh_token",
        response.data.refresh
      );

      navigate("/books");

    } catch (error) {

      console.log(error.response);

      if (
        error.response?.status === 401
      ) {

        setErrors({
          api:
            "Invalid username or password",
        });

      } else if (
        error.response?.data
      ) {

        setErrors(
          error.response.data
        );

      } else {

        setErrors({
          api:
            "Server error. Try again later.",
        });
      }

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="container-fluid">

      <div className="row vh-100">

        <div  className=" col-lg-6 d-none d-lg-flex align-items-center justify-content-center bg-dark  text-white">

          <div>

            <h1 className=" display-4 fw-bold text-warning shadow-sm">Library</h1>

            <p className="lead fw-bold">  Manage books easily </p>

          </div>

        </div>

        <div className=" col-lg-6 d-flex justify-content-center align-items-center">

          <form onSubmit={handleSubmit} className="w-75 p-4 border rounded shadow">

            <h2 className="mb-4fw-bold text-primary" > Login</h2>

            {
              errors.api && (

                <div className="alert  alert-danger">

                  {errors.api}

                </div>
              )
            }

            <div className="mb-3">

              <input type="text" name="username" placeholder="Username"
                className={
                  `form-control ${errors.username
                    ? "is-invalid"
                    : ""
                  }`
                }

                autoComplete="username"

                value={
                  formData.username
                }

                onChange={handleChange}
              />

              {
                errors.username && (

                  <div className=" invalid-feedback" >

                    {
                      errors.username
                    }

                  </div>
                )
              }

            </div>

            <div className="mb-4">

              <input type="password" name="password" placeholder="Password"

                className={
                  `form-control ${errors.password
                    ? "is-invalid"
                    : ""
                  }`
                }

                autoComplete="
                current-password"

                value={
                  formData.password
                }

                onChange={handleChange}
              />

              {
                errors.password && (

                  <div  className="invalid-feedback">

                    {  errors.password }

                  </div>
                )
              }

            </div>

            <button
              type="submit" className=" btn btn-primary w-100" disabled={loading} >

              { loading? "Logging in...": "Login" }

            </button>
            <p className="mt-3 text-center">

  Don't have an account?

  <Link to="/signup">
    {" "}Signup
  </Link>

</p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;