import "./footer.styles.css";
import { Link } from "react-router-dom";
import logo from "/shays-tree.jpg";
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mx-5 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>

      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src={logo} alt={logo} className="footer-img" />
      </a>
      <ul className="nav col-md-4 justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-body-secondary">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/plants" className="nav-link px-2 text-body-secondary">
            Plants
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link px-2 text-body-secondary">
            Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link px-2 text-body-secondary">
            About
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
