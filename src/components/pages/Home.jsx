import Navbar from "../home/Navbar"
import Banner from "../landing/Banner"
// import AboutUs from "../landing/AboutUs"
import Partners from "../landing/Partners"
import Footer from "../home/Footer"
import AboutCompany from "../landing/AboutCompany"
import OurServices from "../landing/OurServices"
import LeadingProjects from "../landing/LeadingProjects"
import SEO from "../SEO"

function Home() {
  return (
    <>
    <SEO
        title="Dot92 - Drones, Electronic Warfare & RF Solutions"
        description="Dot92 provides advanced UAVs, RF & microwave components, electronic warfare systems, signal jammers, and defense solutions for military and commercial sectors."
        keywords="drones, UAVs, electronic warfare, RF components, microwave technology, signal jammers, defense technology, MW components, Pakistan defense"
        image="https://www.dot92.com/images/home-seo.jpg"
        url="https://www.dot92.com/"
      />
      <Navbar />
      <Banner />
      <LeadingProjects/>
      <Partners />
      <AboutCompany/>
      <OurServices/>
      

      <Footer />
    </>
  )
}

export default Home;