// import images
import Hero_person from "./assets/images/Banner/BannerMain4.png";
import Docs from "./assets/docs/SALAMAT_ChristianJoy_H_Portfolio.pdf";

import HTML from "./assets/images/Skills/HTML5.png";
import CSS3 from "./assets/images/Skills/CSS3.png";
import JS from "./assets/images/Skills/JS.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import Vite from "./assets/images/Skills/Vite.png";
import Bootstrap from "./assets/images/Skills/Bootstrap.png";
import Tailwind from "./assets/images/Skills/Tailwind.png";

import Web from "./assets/images/Services/WD.png";
import Admin from "./assets/images/Services/SA.png";
import DBAdmin from "./assets/images/Services/DA.png";

import NexHK from "./assets/images/Projects/NexHK.png";
import CJPort from "./assets/images/Projects/CJPort.png";
import HKSMMS from "./assets/images/Projects/HKSMMS.png";
import Vento from "./assets/images/Projects/Vento.png";

// import icons from react-icons
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BsMessenger } from "react-icons/bs";
import { MdArrowForward, MdCall } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaSalesforce } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  Banner: {
    title: "Web Developer",
    firstName: "CHRISTIAN",
    LastName: "SALAMAT",
    btnText: "Hire Me",
    image: Hero_person,
    docs: Docs,
    AboutTitle: "ABOUT ME :",
    AboutBody: "Hi! I'm Christian Joy H. Salamat, an aspiring I.T. professional specializing in Web Development. With a passion for crafting exceptional digital experiences, I bring a unique blend of skills and strengths to every project. My keen sense of being Alert ensures that I stay ahead of the curve in the rapidly evolving tech landscape, while my proactive approach allows me to anticipate and address challenges before they arise. Combined with my organizational prowess and meticulous attention to detail, I strive to deliver projects that exceed expectations.",
    Banner_media: [
      {
        Icon_title: "Github",
        icon: AiFillGithub,
        link: "https://github.com/CJH-Salamat",
      },
      {
        Icon_title: "LinkedIn",
        icon: CiLinkedin,
        link: "https://www.linkedin.com/in/christian-joy-salamat-2331192ba/",
      },      
      {
        Icon_title: "GMail",
        icon: GrMail,
        link: "mailto:christian.joy.h.salamat@gmail.com",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Modern web content structure",
        logo: HTML,
      },
      {
        name: "CSS",
        para: "Styling language for web",
        logo: CSS3,
      },
      {
        name: "Java Script",
        para: "Dynamic client-side language",
        logo: JS,
      },
      {
        name: "Bootstrap",
        para: "Open-source CSS framework",
        logo: Bootstrap,
      },
      {
        name: "Python",
        para: "Versatile programming language",
        logo: python,
      },
      {
        name: "Tailwind",
        para: "Utility-first CSS framework",
        logo: Tailwind,
      },
      {
        name: "Node JS",
        para: "Open-source JS runtime environment",
        logo: nodejs,
      },
      {
        name: "Vite",
        para: "Next Generation Frontend Tooling",
        logo: Vite,
      },
      {
        name: "React JS",
        para: "Components based Web Builder",
        logo: reactjs,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Developer",
        para: "Designs and builds websites, using programming languages like HTML, CSS, and JavaScript to create interactive and visually appealing online experiences.",
        logo: Web,
      },
      {
        title: "System Analyst",
        para: "Analyzes an organization's computer systems and procedures to design solutions that help improve efficiency or solve problems.",
        logo: Admin,
      },
      {
        title: "Database Administrator",
        para: "Manages and maintains databases, ensuring they are secure, efficient, and accessible.",
        logo: DBAdmin,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY TOP PROJECTS",
    Project_Content: [
      {
        Proj_Description:
          "“NEXHK an improved version of the capstone project, HKSMMSv1.0, with the same goals and problems to solve.”",
        img: NexHK,
        name: "NexHK",
        link: "https://github.com/CJH-Salamat/NexHK",
        Proj_T_stack: [
          {
            StackID: "Laravel",
          },
          {
            StackID: "MySQL",
          },
          {
            StackID: "Tailwind",
          },
        ],
      },
      {
        Proj_Description:
          "“A Vite and React JS Powered Portfolio”",
        img: CJPort,
        name: "CJHS-Portfolio",
        link: "https://cjhs-portfolio.vercel.app",
        Proj_T_stack: [
          {
            StackID: "React.Js",
          },
          {
            StackID: "Vite",
          },
          {
            StackID: "Tailwind",
          },
        ],
      },
      {
        Proj_Description:
          "“A web application information management system that aims to help PHINMA AU manage Scholars”",
        img: HKSMMS,
        name: "HKSMMSv1.0",
        link: "https://github.com/CJH-Salamat/NexHK",
        Proj_T_stack: [
          {
            StackID: "Java Sript",
          },
          {
            StackID: "PHP",
          },
          {
            StackID: "Bootstrap",
          },
          {
            StackID: "MySQL",
          },
        ],
      },
      {
        Proj_Description:
          "“An Inventory Management System that could help the business owner track the sales, inventory, and activity of their billers.”",
        img: Vento,
        name: "Vento",
        link: "https://drive.google.com/drive/folders/1Cb43VelUmKlYoswiI8Yz5QFkPKlTXrEP",
        Proj_T_stack: [
          {
            StackID: ".NET",
          },
          {
            StackID: "MySQL",
          },
        ],
      },
    ],
    icon: MdArrowForward,
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "christian.joy.h.salamat@gmail.com",
        icon: GrMail,
        link: "mailto:christian.joy.h.salamat@gmail.com",
      },
      {
        text: "+63 921 413 2016",
        icon: MdCall,
        link: "",
      },      
      {
        text: "Messenger",
        icon: BsMessenger,
        link: "https://m.me/profile.php?id=61554126470261",
      },
      {
        text: "Github",
        icon: AiFillGithub,
        link: "https://github.com/CJH-Salamat",
      },
      {
        text: "LinkedIn",
        icon: CiLinkedin,
        link: "https://www.linkedin.com/in/christian-joy-salamat-2331192ba/",
      },
      {
        text: "Salesforce",
        icon: FaSalesforce,
        link: "https://www.salesforce.com/trailblazer/j8dv66f0imt4oxgk5v",
      },
      {
        text: "Discord",
        icon: BsDiscord,
        link: "https://discordapp.com/users/427770381567262741",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
