import chengDu from "../../assets/chengDu.webp";
import handshake from "../../assets/about.webp";
import tamsco from "../../assets/tamsco.webp";
import ortus from "../../assets/ortus.webp";
import Expert from "../../assets/expert.webp";
import { MdAirplay } from "react-icons/md";
import { FaShieldAlt, FaBroadcastTower } from "react-icons/fa";

export const partnerLogos = [chengDu];

export const aboutBannerData = {
  backgroundImage: handshake,
  title: "About Us",
  description:
    "We’re a team of passionate creatives and developers building innovative solutions that move people and businesses forward.",
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
  heading: "Welcome to Our Platform",
  paragraphs: [
    `Dot92, established in 2021 in Islamabad, Pakistan, partners with ChengDu Jiaci 
    to drive innovation focused on solving real-world challenges with precision and trust. 
    We work with military, government, and private clients to deliver reliable, tailored solutions.`,

    `ChengDu Jiaci Technology Co., Ltd., based in Chengdu Science City, Sichuan Province, 
    has a registered capital of 11.362 billion yuan and invested over 500 million yuan in R&D. 
    They have developed advanced products, hold 32 invention patents, and own 89 software copyrights.`,
  ],
};
