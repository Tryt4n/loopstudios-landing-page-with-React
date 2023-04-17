import "./NavbarMobile.css";

export default function NavbarMobile({ menuExpanded, setMenuExpanded }) {
  return (
    <nav
      className={menuExpanded ? "expanded container" : ""}
      data-aos={menuExpanded ? "zoom-in" : ""}
      data-aos-duration="500"
    >
      <div className="nav-mobile__close-menu-wrapper">
        <a
          href="#"
          aria-label="homepage"
          title="Loopstudios"
          tabIndex={2}
          data-aos={menuExpanded ? "flip-left" : "fade-right"}
          data-aos-delay={menuExpanded ? "500" : ""}
        >
          <img
            src="./assets/images/logo.svg"
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
            data-aos="fade-left"
          >
            <img
              src="./assets/images/icon-hamburger.svg"
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
            data-aos="flip-right"
            data-aos-delay="500"
          >
            <img
              src="./assets/images/icon-close.svg"
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
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              About
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              Careers
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              Events
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              Products
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
              tabIndex={3}
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              Support
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
