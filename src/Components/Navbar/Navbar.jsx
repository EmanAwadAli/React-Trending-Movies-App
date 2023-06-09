import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ userData, logOut }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <Link className="navbar-brand text-light" to="/">
            <h3>Noxe</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-menu"
            aria-controls="main-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="main-menu">
            {userData ? (
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="movies">
                    Movies
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="Tvshow">
                    Tvshow
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="people">
                    People
                  </NavLink>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item d-flex align-items-center d-none d-lg-flex">
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-twitter"></i>
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fab mx-2 fa-soundcloud"></i>
              </li>
              {userData ? (
                <li className="nav-item">
                  <span onClick={logOut} className="nav-link cursor-pointer">
                    Logout
                  </span>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="register">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
