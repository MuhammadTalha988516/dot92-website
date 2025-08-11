import Navbar from "../home/Navbar"
import OurExpertise from "../ElectronicWarfare/OurExpertise"
import Applications from "../ElectronicWarfare/Applications"
import Footer from "../home/Footer"
import EBanner from "../ElectronicWarfare/EBanner"
import SEO from "../SEO"
function ElectronicWarfare(){


return(
<>
<SEO
        title="Electronic Warfare Systems - Dot92"
        description="Dot92 delivers advanced electronic warfare systems, including signal jammers, communication interceptors, and counter-drone technology."
        keywords="electronic warfare, EW systems, signal jammers, RF interceptors, anti-drone systems"
        image="https://www.dot92.com/images/ew-seo.jpg"
        url="https://www.dot92.com/ew"
      />
<EBanner />
<Navbar />
<OurExpertise />
<Applications />
<Footer />
</>


)


}
export default ElectronicWarfare;