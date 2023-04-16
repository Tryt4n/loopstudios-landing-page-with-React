import Navbar from "../Navbar/Navbar";
import "./Footer.css";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="background-color">
      <footer
        id="footer"
        className="container footer"
      >
        <div
          className="footer__navigation"
          aria-label="footer-navigation"
        >
          <Navbar />
        </div>

        <div className="footer__social-media-wrapper">
          <nav aria-label="social media navigation">
            <ul className="social-media-list">
              <li>
                <a
                  href="#footer"
                  aria-label="Go to our facebook"
                  className="social-media-list__link"
                >
                  <img
                    src="./src/assets/images/icon-facebook.svg"
                    alt="facebook logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  aria-label="Go to our twitter"
                  className="social-media-list__link"
                >
                  <img
                    src="./src/assets/images/icon-twitter.svg"
                    alt="twitter logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  aria-label="Go to our pinterest"
                  className="social-media-list__link"
                >
                  <img
                    src="./src/assets/images/icon-pinterest.svg"
                    alt="pinterest logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  aria-label="Go to our instagram"
                  className="social-media-list__link"
                >
                  <img
                    src="./src/assets/images/icon-instagram.svg"
                    alt="instagram logo"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <small>&copy; {date} Loopstudios. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
