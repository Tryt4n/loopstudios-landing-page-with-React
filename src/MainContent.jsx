import SectionVR from "./components/SectionVR/SectionVR";
import Creations from "./components/Creations/Creations";

export default function MainContent({ width, height }) {
  return (
    <main className="container">
      <SectionVR
        width={width}
        height={height}
      />
      <Creations
        width={width}
        height={height}
      />
    </main>
  );
}
