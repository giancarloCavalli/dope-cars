import "bootstrap/js/src/collapse.js";
import "./styles.css";

const Navbar = () => {
  return (
      <nav className="custom-toggler navbar navbar-expand-md bg-secondary main-nav">
        <div className="container-fluid text-primary">
          <a href="/" className="navbar-brand text-primary">
            <h4>Dope Cars</h4>
          </a>

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
                <a className="nav-link text-primary" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link text-primary" href="/">
                  Catálogo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
