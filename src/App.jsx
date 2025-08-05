import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import {BrowserRouter , Routes, Route} from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
