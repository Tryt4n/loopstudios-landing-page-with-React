import Navbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <header className="container header">
      <img
        src="/src/assets/images/desktop/image-hero.jpg"
        alt="hero image"
        className="header__background-image"
      />
      <Navbar />
      <div className=" header-container">
        <h1 className="header-container__header">immersive experiences that deliver</h1>
      </div>
    </header>
  );
}
