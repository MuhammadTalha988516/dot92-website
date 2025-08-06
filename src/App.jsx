import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import ElectronicWarfare from "./components/pages/ElectronicWarfare";
import ScrollTriggerCleanup from "./components/helpers/ScrollTriggerCleanup";
import ErrorBoundary from "./components/helpers/ErrorBoundary";

function App() {
  

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollTriggerCleanup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/electronic-warfare" element={<ElectronicWarfare />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
