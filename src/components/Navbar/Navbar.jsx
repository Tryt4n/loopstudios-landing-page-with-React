import "./Navbar.css";

export default function Navbar({ width }) {
  return (
    <nav className="nav">
      <a
        href="#"
        aria-label="homepage"
        title="Loopstudios"
        data-aos={width > 768 ? "zoom-in-down" : "fade-down"}
        data-aos-duration={width > 768 ? "500" : ""}
      >
        <img
          src="./assets/images/logo.svg"
          alt="Loopstudios logo"
        />
      </a>

      <ul
        className="nav__list"
        data-aos={width <= 768 ? "zoom-in-down" : "fade-down"}
        data-aos-duration={width > 768 ? "500" : ""}
      >
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
            data-aos={width <= 768 ? "fade-up" : ""}
          >
            About
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
            data-aos={width <= 768 ? "fade-up" : ""}
          >
            Careers
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
            data-aos={width <= 768 ? "fade-up" : ""}
          >
            Events
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
            data-aos={width <= 768 ? "fade-up" : ""}
          >
            Products
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
            data-aos={width <= 768 ? "fade-up" : ""}
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
}
