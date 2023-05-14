import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ userData, setUserData }) {
  let navigate = useNavigate();

  //LogOut
  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/Login");
  }
  return (
    <>
      <Navbar userData={userData} logOut={logOut} />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}