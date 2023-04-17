import Navbar from "../Navbar/Navbar";
import "./Footer.css";

export default function Footer({ width, height }) {
  const date = new Date().getFullYear();

  return (
    <div className="bg-dark">
      <footer
        id="footer"
        className="container footer"
      >
        <div
          className="footer__navigation"
          aria-label="footer-navigation"
        >
          <Navbar
            width={width}
            height={height}
          />
        </div>

        <div className="footer__social-media-wrapper">
          <nav aria-label="social media navigation">
            <ul className="social-media-list">
              <li>
                <a
                  href="#footer"
                  aria-label="Go to our facebook"
                  title="Facebook"
                  className="social-media-list__link"
                >
                  <img
                    src="./assets/images/icon-facebook.svg"
                    alt="facebook logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  aria-label="Go to our twitter"
                  title="Twitter"
                  className="social-media-list__link"
                >
                  <img
                    src="./assets/images/icon-twitter.svg"
                    alt="twitter logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  aria-label="Go to our pinterest"
                  title="Pinterest"
                  className="social-media-list__link"
                >
                  <img
                    src="./assets/images/icon-pinterest.svg"
                    alt="pinterest logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  aria-label="Go to our instagram"
                  title="Instagram"
                  className="social-media-list__link"
                >
                  <img
                    src="./assets/images/icon-instagram.svg"
                    alt="instagram logo"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <small className="footer__copyright-text">
            &copy; <time dateTime={date}>{date}</time> Loopstudios. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
}
