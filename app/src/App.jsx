import { useState } from "react";
import useWindowSize from "./hooks/useWindowsSize";

import Header from "./components/Header/Header";
import MainContent from "./MainContent";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const { width, height } = useWindowSize();
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <>
      <Header
        width={width}
        height={height}
        menuExpanded={menuExpanded}
        setMenuExpanded={setMenuExpanded}
      />
      {!menuExpanded && (
        <>
          <MainContent
            width={width}
            height={height}
          />
          <Footer
            width={width}
            height={height}
          />
        </>
      )}
    </>
  );
}
