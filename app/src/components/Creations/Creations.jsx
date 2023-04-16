import "./Creations.css";

export default function Creations() {
  return (
    <section className="creations">
      <header className="creations__heading">
        <h2 className="creations__header">our creations</h2>
        <button className="creations__btn">see all</button>
      </header>

      <div
        id="creations"
        className="creations-grid"
      >
        <article className="creations-grid__card">
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src="./src/assets/images/desktop/image-deep-earth.jpg"
              alt="Deep Earth"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">deep earth</h3>
          </a>
        </article>

        <article className="creations-grid__card">
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src="./src/assets/images/desktop/image-night-arcade.jpg"
              alt="Night Arcade"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">night arcade</h3>
          </a>
        </article>

        <article className="creations-grid__card">
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src="./src/assets/images/desktop/image-soccer-team.jpg"
              alt="Soccer team VR"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">soccer team vr</h3>
          </a>
        </article>

        <article className="creations-grid__card">
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src="./src/assets/images/desktop/image-grid.jpg"
              alt="The Grid"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">the grid</h3>
          </a>
        </article>

        <article className="creations-grid__card">
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src="./src/assets/images/desktop/image-from-above.jpg"
              alt="From up above VR"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">from up above vr</h3>
          </a>
        </article>

        <article className="creations-grid__card">
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src="./src/assets/images/desktop/image-pocket-borealis.jpg"
              alt="Pocket Borealis"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">pocket borealis</h3>
          </a>
        </article>

        <article className="creations-grid__card">
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src="./src/assets/images/desktop/image-curiosity.jpg"
              alt="The curiosity"
              className="creations-grid__image"
            />
            <h3 className="creations-grid__header">the curiosity</h3>
          </a>
        </article>

        <article className="creations-grid__card">
          <a
            href="#creations"
            className="creations-grid__link"
          >
            <img
              src="./src/assets/images/desktop/image-fisheye.jpg"
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
