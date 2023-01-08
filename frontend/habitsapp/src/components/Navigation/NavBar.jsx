import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUserName(user.username);
    } else {
      setUserName("");
    }
  }, [flag]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HABITS APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {!userName && (
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
            )}

            {!userName && (
              <li className="nav-item">
                <Link className="nav-link " to="/login" tabIndex="-1">
                  SIGN IN
                </Link>
              </li>
            )}
          </ul>
          {userName && (
            <div className="d-flex">
              <div className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userName}
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <p>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </p>

                  <p>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        window.localStorage.removeItem("jwt");
                        window.localStorage.removeItem("user");
                        window.localStorage.removeItem("bookmarks");
                        setFlag(true);
                        navigate("/login");
                      }}
                    >
                      Logout
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
