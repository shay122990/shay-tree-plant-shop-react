import "./navbar.styles.css";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import { Link, Outlet } from "react-router-dom";
import logo from "/shays-tree.jpg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar navbar-light px-3 py-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Shay's Tree Logo" />
          </Link>

          <div className="d-lg-none">
            <button className="menu-toggle" onClick={toggleMenu}>
              <FiMenu size={32} />
            </button>
          </div>

          <div className="d-none d-lg-flex gap-4 align-items-center">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/plants">
              Plants
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                Sign Out
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                Sign In
              </Link>
            )}
            <CartIcon />
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          ×
        </button>
        <Link to="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/plants" className="nav-link" onClick={closeMenu}>
          Plants
        </Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>
          About
        </Link>
        {currentUser ? (
          <span
            className="nav-link"
            onClick={() => {
              signOutUser();
              closeMenu();
            }}
          >
            Sign Out
          </span>
        ) : (
          <Link to="/auth" className="nav-link" onClick={closeMenu}>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>

      {isCartOpen && <CartDropdown />}
      <Outlet />
    </>
  );
};

export default Navbar;
