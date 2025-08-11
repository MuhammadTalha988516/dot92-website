import Navbar from "../home/Navbar"
import AboutBanner from "../about us/AboutBanner";
import OurAffiliates from "../about us/OurAffiliates";
import OurTeam from "../about us/OurTeam";
import Footer from "../home/Footer"
import SEO from "../SEO"

function About(){

return(

    <>
    <SEO
        title="About Dot92 - Leaders in Drone & Electronic Warfare Solutions"
        description="Dot92 specializes in cutting-edge drones, RF components, and defense technology, with years of expertise in electronic warfare and advanced surveillance systems."
        keywords="about Dot92, drone company Pakistan, electronic warfare experts, defense technology providers, RF systems"
        image="https://www.dot92.com/images/about-seo.jpg"
        url="https://www.dot92.com/about"
      />
    <Navbar />
    <AboutBanner />
    <OurAffiliates />
    <OurTeam />
    <Footer />
    </>
)



}
export default About;