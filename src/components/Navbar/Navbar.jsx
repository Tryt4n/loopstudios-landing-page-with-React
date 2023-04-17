import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a
        href="#"
        aria-label="homepage"
        title="Loopstudios"
      >
        <img
          src="./src/assets/images/logo.svg"
          alt="Loopstudios logo"
        />
      </a>

      <ul className="nav__list">
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
          >
            About
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
          >
            Careers
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
          >
            Events
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
          >
            Products
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#"
            className="nav__link"
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
}
