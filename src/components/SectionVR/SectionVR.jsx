import "./SectionVR.css";

export default function SectionVR({ width, height }) {
  return (
    <section className="sectionVR">
      <img
        src={
          width > 891
            ? "./assets/images/desktop/image-interactive.jpg"
            : "./assets/images/mobile/image-interactive.jpg"
        }
        alt="men playing VR game"
        className="sectionVR__image"
      />
      <div className="sectionVR__text-container">
        <h2 className="sectionVR__header">the leader in interactive VR</h2>
        <p className="sectionVR__text">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
          some of the best companies around the globe. Our award-winning creations have transformed
          businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
