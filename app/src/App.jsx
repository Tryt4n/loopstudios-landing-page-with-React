import useWindowSize from "./hooks/useWindowsSize";

import Header from "./components/Header/Header";
import MainContent from "./MainContent";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <>
      <Header
        width={width}
        height={height}
      />
      <MainContent
        width={width}
        height={height}
      />
      <Footer
        width={width}
        height={height}
      />
    </>
  );
}
