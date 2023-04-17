import { useState } from "react";
import "./NavbarMobile.css";

export default function NavbarMobile() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <nav className={menuExpanded && "expanded container"}>
      <div className="nav-mobile__close-menu-wrapper">
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
            >
              About
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
            >
              Careers
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
            >
              Events
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
            >
              Products
            </a>
          </li>
          <li className="nav-mobile__list-item">
            <a
              href="#"
              className="nav-mobile__link"
            >
              Support
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
