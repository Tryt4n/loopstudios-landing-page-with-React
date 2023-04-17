import "./Creations.css";

export default function Creations({ width, height }) {
  return (
    <section className="creations">
      <header className="creations__heading">
        <h2
          className="creations__header"
          data-aos="fade-up"
        >
          our creations
        </h2>
        <button
          className="creations__btn"
          data-aos="fade-up"
        >
          see all
        </button>
      </header>

      <div
        id="creations"
        className="creations-grid"
      >
        <article
          className="creations-grid__card"
          data-aos={width > 768 ? "zoom-in-right" : "fade-up"}
          data-aos-delay={width > 768 ? "250" : ""}
          data-aos-duration="1000"
        >
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src={
                width > 768
                  ? "./assets/images/desktop/image-deep-earth.jpg"
                  : "./assets/images/mobile/image-deep-earth.jpg"
              }
              alt="Deep Earth"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">deep earth</h3>
          </a>
        </article>

        <article
          className="creations-grid__card"
          data-aos={width > 768 ? "zoom-in" : "fade-up"}
          data-aos-delay={width > 768 ? "400" : ""}
          data-aos-duration="1000"
        >
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src={
                width > 768
                  ? "./assets/images/desktop/image-night-arcade.jpg"
                  : "./assets/images/mobile/image-night-arcade.jpg"
              }
              alt="Night Arcade"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">night arcade</h3>
          </a>
        </article>

        <article
          className="creations-grid__card"
          data-aos={width > 768 ? "zoom-in" : "fade-up"}
          data-aos-delay={width > 768 ? "550" : ""}
          data-aos-duration="1000"
        >
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src={
                width > 768
                  ? "./assets/images/desktop/image-soccer-team.jpg"
                  : "./assets/images/mobile/image-soccer-team.jpg"
              }
              alt="Soccer team VR"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">soccer team vr</h3>
          </a>
        </article>

        <article
          className="creations-grid__card"
          data-aos={width > 768 ? "zoom-in-left" : "fade-up"}
          data-aos-delay={width > 768 ? "700" : ""}
          data-aos-duration="1000"
        >
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src={
                width > 768
                  ? "./assets/images/desktop/image-grid.jpg"
                  : "./assets/images/mobile/image-grid.jpg"
              }
              alt="The Grid"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">the grid</h3>
          </a>
        </article>

        <article
          className="creations-grid__card"
          data-aos={width > 768 ? "zoom-in-right" : "fade-up"}
          data-aos-delay={width > 768 ? "850" : ""}
          data-aos-duration="1000"
        >
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src={
                width > 768
                  ? "./assets/images/desktop/image-from-above.jpg"
                  : "./assets/images/mobile/image-from-above.jpg"
              }
              alt="From up above VR"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">from up above vr</h3>
          </a>
        </article>

        <article
          className="creations-grid__card"
          data-aos={width > 768 ? "zoom-in" : "fade-up"}
          data-aos-delay={width > 768 ? "1000" : ""}
          data-aos-duration="1000"
        >
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src={
                width > 768
                  ? "./assets/images/desktop/image-pocket-borealis.jpg"
                  : "./assets/images/mobile/image-pocket-borealis.jpg"
              }
              alt="Pocket Borealis"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">pocket borealis</h3>
          </a>
        </article>

        <article
          className="creations-grid__card"
          data-aos={width > 768 ? "zoom-in" : "fade-up"}
          data-aos-delay={width > 768 ? "1150" : ""}
          data-aos-duration="1000"
        >
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src={
                width > 768
                  ? "./assets/images/desktop/image-curiosity.jpg"
                  : "./assets/images/mobile/image-curiosity.jpg"
              }
              alt="The curiosity"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">the curiosity</h3>
          </a>
        </article>

        <article
          className="creations-grid__card"
          data-aos={width > 768 ? "zoom-in-left" : "fade-up"}
          data-aos-delay={width > 768 ? "1300" : ""}
          data-aos-duration="1000"
        >
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src={
                width > 768
                  ? "./assets/images/desktop/image-fisheye.jpg"
                  : "./assets/images/mobile/image-fisheye.jpg"
              }
              alt="Make it fisheye"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">make it fisheye</h3>
          </a>
        </article>
      </div>
    </section>
  );
}
