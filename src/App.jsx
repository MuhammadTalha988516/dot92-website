import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import ElectronicWarfare from "./components/pages/ElectronicWarfare";
import RFComponents from "./components/RF and MW/RfandMwbanner";
import ScrollTriggerCleanup from "./components/helpers/ScrollTriggerCleanup";
import ErrorBoundary from "./components/helpers/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router"; // ✅ Correct for React Router v7

const isSnap = typeof window === "undefined" || window.__REACT_SNAP__;

function App() {
  const Router = isSnap ? StaticRouter : BrowserRouter;

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router location={isSnap ? "/" : undefined}>
          <ScrollTriggerCleanup />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/electronic-warfare" element={<ElectronicWarfare />} />
            <Route path="/rf-mw-components" element={<RFComponents />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
