import "./NavbarMobile.css";

export default function NavbarMobile({ menuExpanded, setMenuExpanded }) {
  return (
    <nav className={menuExpanded ? "expanded container" : ""}>
      <div className="nav-mobile__close-menu-wrapper">
        <a
          href="#"
          aria-label="homepage"
          title="Loopstudios"
          tabIndex={2}
        >
          <img
            src="./src/assets/images/logo.svg"
            alt="Loopstudios logo"
          />
        </a>
        {!menuExpanded ? (
          <button
            className="nav-mobile__btn"
            aria-label="Open Navigation Menu"
            aria-controls="navigation-menu"
            aria-expanded={menuExpanded}
            onClick={() => setMenuExpanded(true)}
          >
            <img
              src="./src/assets/images/icon-hamburger.svg"
              alt="Opening Button"
            />
          </button>
        ) : (
          <button
            className="nav-mobile__btn"
            aria-label="Close Navigation Menu"
            aria-controls="navigation-menu"
            aria-expanded={menuExpanded}
            autoFocus
            tabIndex={1}
            onClick={() => setMenuExpanded(false)}
          >
            <img
              src="./src/assets/images/icon-close.svg"
              alt="Closing Button"
            />
          </button>
        )}
      </div>

      {menuExpanded && (
        <ul
          id="navigation-menu"
          className="nav-mobile__list"
        >
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
            >
              About
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
            >
              Careers
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
            >
              Events
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
            >
              Products
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
            >
              Support
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
