import "./navbar.styles.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/shays-tree.jpg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex justify-content-between mx-3">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Shay's Tree Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plants">
                  Plants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {currentUser ? (
                <span className="nav-link" onClick={signOutUser}>
                  Sign Out
                </span>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/auth">
                    Sign In
                  </Link>
                </li>
              )}
              <CartIcon />
            </ul>
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
