import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shays-tree.jpg";
import SignIn from "../../pages/sign-in/sign-in.page";
import Cart from "../../pages/cart/cart.page";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${dropdownOpen ? "show" : ""}`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setDropdownOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/plants"
                onClick={() => setDropdownOpen(false)}
              >
                Plants
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => setDropdownOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                onClick={toggleDropdown}
              >
                Show more
              </Link>
              <ul
                className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/sign-in"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <SignIn />
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/cart"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Cart />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
