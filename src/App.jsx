import Navbar from "./components/home/Navbar"
import Banner from "./components/landing/Banner"
import AboutUs from "./components/landing/AboutUs"
import Partners from "./components/landing/Partners"
import Footer from "./components/home/Footer"
import AboutCompany from "./components/landing/AboutCompany"
import OurServices from "./components/landing/OurServices"
import LeadingProjects from "./components/landing/LeadingProjects"


function App() {
  

  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <LeadingProjects/>
      <AboutCompany/>
      <OurServices/>
      <Partners />

      <Footer />
    </>
  )
}

export default App
