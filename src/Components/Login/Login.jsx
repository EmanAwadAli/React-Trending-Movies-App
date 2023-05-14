import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login({ saveUserData }) {
  let [apiError, setApiError] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().required("email is requried").email("email invalid"),
    password: Yup.string()
      .required("password is requried")
      .matches(
        /^[A-Z][a-z0-9]{0,5}/,
        "password must start with capital letter"
      ),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: sendLoginData,
  });

  async function sendLoginData(values) {
    setLoading(true);
    let { data } = await axios
      .post("https://route-ecommerce-app.vercel.app/api/v1/auth/signin", values)
      .catch((err) => {
        setApiError(err.response.data.message);
        setLoading(false);
      });
    if (data.message === "success") {
      localStorage.setItem("userToken", data.token);
      setLoading(false);
      saveUserData();
      navigate("/");
    }
  }
  return (
    <div className="container py-3 py-md-5">
      <div>
        <h3 className="mb-3">Login</h3>
        <form onSubmit={formik.handleSubmit}>
          {apiError ? (
            <span className="d-block text-danger">{apiError}</span>
          ) : (
            ""
          )}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="form-control my-2"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="d-block text-danger">{formik.errors.email}</span>
          ) : (
            ""
          )}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-control my-2"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <span className="d-block text-danger">
              {formik.errors.password}
            </span>
          ) : (
            ""
          )}
          <button type="submit" className="btn light-bg text-white mt-2">
            {loading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
