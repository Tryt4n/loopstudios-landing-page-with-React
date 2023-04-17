import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../Navbar/NavbarMobile";
import "./Header.css";

export default function Header({ width, height, menuExpanded, setMenuExpanded }) {
  return (
    <header className="container header">
      <img
        src={
          width > 1024 || width > height
            ? "/src/assets/images/desktop/image-hero.jpg"
            : "/src/assets/images/mobile/image-hero.jpg"
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
      <div className=" header-container">
        <h1 className="header-container__header">immersive experiences that deliver</h1>
      </div>
    </header>
  );
}
