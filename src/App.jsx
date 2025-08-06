import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
// import EW from "./components/pages/EW";
import RFComponents from "./components/RF and MW/RfandMwbanner";
// import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/electronic-warfare" element={<EW />} /> */}
        <Route path="/rf-mw-components" element={<RFComponents />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
