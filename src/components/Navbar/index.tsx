import "bootstrap/js/src/collapse.js";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="custom-toggler navbar navbar-expand-md bg-secondary main-nav">
      <div className="container-fluid text-primary">
        <Link to="/" className="navbar-brand text-primary">
          <h4>Dope Cars</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dopecars-navbar"
          aria-controls="dopecars-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dopecars-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink className="nav-link text-primary" activeClassName="active" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link text-primary" activeClassName="active" to="/products">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
