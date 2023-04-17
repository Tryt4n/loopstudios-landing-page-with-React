import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../Navbar/NavbarMobile";
import "./Header.css";

export default function Header({ width, height, menuExpanded, setMenuExpanded }) {
  return (
    <>
      {!menuExpanded ? (
        <header className="container header">
          <img
            src={
              width > 1024 || width > height
                ? "./assets/images/desktop/image-hero.jpg"
                : "./assets/images/mobile/image-hero.jpg"
            }
            alt="hero image"
            className="header__background-image"
          />
          {width > 768 ? (
            <Navbar />
          ) : (
            <NavbarMobile
              menuExpanded={menuExpanded}
              setMenuExpanded={setMenuExpanded}
            />
          )}
          <div
            className=" header-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 className="header-container__header">immersive experiences that deliver</h1>
          </div>
        </header>
      ) : (
        <NavbarMobile
          menuExpanded={menuExpanded}
          setMenuExpanded={setMenuExpanded}
        />
      )}
    </>
  );
}
