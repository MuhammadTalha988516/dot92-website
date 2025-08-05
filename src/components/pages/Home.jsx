import Navbar from "../home/Navbar"
import Banner from "../landing/Banner"
import AboutUs from "../landing/AboutUs"
import Partners from "../landing/Partners"
import Footer from "../home/Footer"
import AboutCompany from "../landing/AboutCompany"
import OurServices from "../landing/OurServices"
import LeadingProjects from "../landing/LeadingProjects"

function Home() {``
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

export default Home;