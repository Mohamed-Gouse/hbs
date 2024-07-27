import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { logout } from "../../app/authSlice";

function Header() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <nav className="container my-2 rounded shadow-sm fixed-top navbar navbar-expand-lg navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <a className="navbar-brand mr-auto font-weight-bold">HMS</a>
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hotel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"login"}>
                List Your Property
              </Link>
            </li>
          </ul>
          <div className="ml-auto">
            {isLogged ? (
              <div className="dropdown open">
                <a
                  className="text-secondary text-decoration-none dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill"></i>
                  <span className="ml-2">User Profile</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                  <Link className="dropdown-item" to={'/profile'}>
                    Profile
                  </Link>
                  <Link className="dropdown-item" to={'/profile#wishlist'}>
                    Wishlist
                  </Link>
                  <Link className="dropdown-item" to={'/selection'}>
                    Selection
                  </Link>
                  <button
                    className="btn dropdown-item"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="text-secondary text-decoration-none"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
