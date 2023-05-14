import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  let navigate = useNavigate();
  let [apiError, setApiError] = useState("");
  let [loading, setLoading] = useState(false);
  let validate = Yup.object({
    name: Yup.string()
      .required("name is requried")
      .min(3, "minumim name is 3 chars")
      .max(15, "max name is 15 chars"),
    email: Yup.string().required("email is requried").email("email invalid"),
    password: Yup.string()
      .required("password is requried")
      .matches(
        /^[A-Z][a-z0-9]{0,5}/,
        "password must start with capital letter"
      ),
    rePassword: Yup.string()
      .required("rePassword is requried")
      .oneOf([Yup.ref("password")], "rePassword doesn't match"),
    phone: Yup.string()
      .required("phone is requried")
      .matches(/^01[0125][0-9]{8}/, "This phone isn't valid"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validate,
    onSubmit: sendRegisteredData,
  });

  async function sendRegisteredData(values) {
    setLoading(true);

    let { data } = await axios
      .post("https://route-ecommerce-app.vercel.app/api/v1/auth/signup", values)
      .catch((err) => {
        setApiError(err.response.data.message);
        setLoading(false);
      });

    if (data.message === "success") {
      navigate("/login");
      setLoading(false);
    }
  }
  return (
    <div className="container">
      <div className="w-100">
        <h3>Register Now</h3>
        <form onSubmit={formik.handleSubmit}>
          {apiError ? (
            <span className="d-block text-danger">{apiError}</span>
          ) : (
            ""
          )}
          <label htmlFor="name">name</label>
          <input
            id="name"
            className="form-control my-2"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <span className="d-block text-danger">{formik.errors.name}</span>
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
          <label htmlFor="rePassword">RePassword</label>
          <input
            id="rePassword"
            className="form-control my-2"
            type="password"
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <span className="d-block text-danger">
              {formik.errors.rePassword}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            className="form-control my-2"
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.errors.phone && formik.touched.phone ? (
            <span className="d-block text-danger">{formik.errors.phone}</span>
          ) : (
            ""
          )}
          <button type="submit" className="btn btn-info text-white">
            {loading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
