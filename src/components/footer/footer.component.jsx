import "./footer.styles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "/shays-tree.jpg";

const footerCols = [
  {
    title: "Shop",
    links: [
      { to: "/plants", label: "All Plants" },
      { to: "/plants?sort=popular", label: "Best Sellers" },
      { to: "/plants?filter=low-light", label: "Low Light" },
      { to: "/plants?filter=pet-friendly", label: "Pet Friendly" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/pricing", label: "Pricing" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { to: "/shipping", label: "Shipping & Returns" },
      { to: "/plant-care", label: "Plant Care" },
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
    ],
  },
];

const badges = ["Fast delivery", "Secure checkout", "Care tips"];

const contactRows = [
  {
    label: "Email",
    value: (
      <a className="sf__value" href="mailto:support@shaystree.com">
        support@shaystree.com
      </a>
    ),
  },
  { label: "Location", value: <span className="sf__value">Dubai, UAE</span> },
];

function FooterCol({ title, links }) {
  return (
    <div className="sf__col">
      <h6 className="sf__h">{title}</h6>
      <ul className="sf__list">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterCol.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const Footer = () => {
  return (
    <footer className="sf">
      <div className="sf__container">
        <div className="sf__brand">
          <Link to="/" className="sf__brandLink">
            <img src={logo} alt="Shay's Tree" className="sf__logo" />
            <div className="sf__brandText">
              <p className="sf__name">Shay’s Tree</p>
              <p className="sf__tagline">Plants • Pots • Care</p>
            </div>
          </Link>

          <p className="sf__desc">
            Indoor plants delivered in Dubai. Simple care guides, curated picks,
            and beginner-friendly bundles.
          </p>

          <div className="sf__badges">
            {badges.map((b) => (
              <span key={b} className="sf__badge">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="sf__cols">
          {footerCols.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}
        </div>

        <div className="sf__contact">
          <h6 className="sf__h">Get in touch</h6>

          {contactRows.map((row) => (
            <div key={row.label} className="sf__contactRow">
              <span className="sf__label">{row.label}</span>
              {row.value}
            </div>
          ))}

          <div className="sf__miniLinks">
            <Link to="/contact" className="sf__cta">
              Contact
            </Link>
            <Link to="/faq" className="sf__cta sf__cta--ghost">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      <div className="sf__bottom">
        <p className="sf__copyright">
          © {new Date().getFullYear()} Shay’s Tree. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
