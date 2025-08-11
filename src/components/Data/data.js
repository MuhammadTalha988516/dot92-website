import chengDu from "../../assets/chengDu.webp";
import Expert from "../../assets/drone.webp";
import tamsco from "../../assets/tamsco.webp";
import ortus from "../../assets/ortus.webp";
import about from "../../assets/about.webp"
import { MdAirplay } from "react-icons/md";
import { FaShieldAlt, FaBroadcastTower } from "react-icons/fa";

export const partnerLogos = [chengDu];

export const aboutBannerData = {
  backgroundImage: about ,  
  title: "Welcome to Our Platform",
  description:
    "Dot92 was established in 2021 and is proudly registered in Islamabad, Pakistan. Our proud partnership with ChengDu Jiaci helps our vision to grow and reach new frontiers. At Dot92, we believe innovation is not just about advanced technology but about solving real-world challenges with precision, purpose, and trust. We work closely with military, government, and private sector clients to create solutions that are tailored, reliable, and built to perform where it matters most.Chengdu Jiaci Technology Co., Ltd. was established in Chengdu, with a registered capital in Chengdu Science City, Tianfu New District, Sichuan Province. Registered capital 11362 million yuan",
};

export const ouraffiliates = [
  {
    logo: tamsco,
    name: "Tamsco",
    description:
      "Deals in Energy saving solutions, civil and electric work, specialized equipment & tenders",
  },
  {
    logo: ortus,
    name: "Ortus",
    description:
      "Deals in cybersecurity and IT services across Pakistan UK and UAE",
  },
];

export const expertiseData = [
  {
    icon: MdAirplay,
    title: "Electronic Attack",
    description: "Disrupt, deny, degrade, destroy, or deceive",
  },
  {
    icon: FaShieldAlt,
    title: "Electronic Protection",
    description: "Preventing a receiver from being jammed or deceived",
  },
  {
    icon: FaBroadcastTower,
    title: "Electronic Support",
    description: "Sensing of the electromagnetic spectrum",
  },
];

export const applicationsData = [
  {
    icon: "drone",
    title: "UAVs",
    description: [
      "Types of UAV’s",
      "Jammers",
      "Monitoring & Detection Systems",
      "AI based Anti-Drone Systems",
    ],
  },
  {
    icon: "plane",
    title: "Flying Wing Unmanned Ariel Vehicle",
    description:
      "Compatible with most existing weapon platforms, they feature simple loading, carrying, and launch procedures, with low operational complexity",
  },
  {
    icon: "electronics",
    title: "PGKs",
    description:
      "It is a defense technology which adopts GPS, BD Guidance (INS Assistance. Duck Energy Control with continuous two dimensional guidance and extreme correction accuracy.",
  },
  {
    icon: "satellite",
    title: "EW Software Solutions",
    description:
      "Our Electronic Warfare (EW) software solutions empower operators with advanced signal analysis, jamming control, and real-time spectrum dominance. Customizable and secure, these tools are built for tactical superiority.",
  },
  {
    icon: "lasergun",
    title: "Laser Gun System",
    description:
      "Our system is capable of dazzling or disabling UAV and drone sensors, providing air defense for critical infrastructure, and neutralizing explosive devices or other hazardous objects from a safe distance.",
  },
  {
    icon: "helicopter",
    title: "Heavy Duty Unmanned Helicopter",
    description:
      "The unmanned helicopter system is designed to carry out critical tasks such as ammunition delivery, casualty evacuation, equipment and parts transport, and emergency medical supply drops. These operations are made possible through a versatile unmanned airframe equipped for material handling.",
  },
];

export const bannerData = {
  image: Expert,
  heading: "Electronic Warfare",
  
};
