// import images
import Hero_person from "./assets/images/Hero/person.png";


import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import vue from './assets/images/Skills/vue.png';
import bootstrap from './assets/images/Skills/bootstrap.png';
import mongodb from './assets/images/Skills/mongo.png';
import mysql from './assets/images/Skills/mysql.png';
import materialui from './assets/images/Skills/materialui.png';

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project2 from "./assets/images/projects/service_2.png";
import project3 from "./assets/images/projects/service_3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

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
  hero: {
    title: "Web Developer",
    firstName: "RABIA",
    LastName: "KHAN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experince in Web development",
      },
      {
        count: "3+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
    
      {
        name: "Node js",
        para: "Expert in scalable server-side solutions..",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Skilled React dev crafts dynamic UIs..",
        logo: reactjs,
      },
      {
        name: "Vue JS",
        para: "Proficient in crafting interactive user interfaces..",
        logo: vue,
      },
      {
        name: "Python",
        para: "Fluent in versatile scripting, data analysis..",
        logo: python,
      },
      {
        name: "Bootstrap",
        para: "responsive UIs with ease using Bootstrap..",
        logo: bootstrap,
      },
      {
        name: "MongoDB",
        para: "Proficient in creating scalable database solutions..",
        logo: mongodb,
      },
      {
        name: "mysql",
        para: "Skilled in designing efficient relational databases..",
        logo: mysql,
      },
      {
        name: "Material UI",
        para: " Expert in leveraging Material Design principles..",
        logo: materialui,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Full Stack Web Development",
        para: " I offer comprehensive solutions that encompass every aspect of the development process. From designing robust backend systems with MongoDB and Express.js to creating dynamic user interfaces using React.js, I leverage the full potential of these technologies to build high-performance, scalable web applications.",
        logo: services_logo1,
      },
      {
        title: "UI / UX DESIGNING",
        para: "With a keen eye for aesthetics and a deep understanding of user psychology, I specialize in crafting interfaces that not only look beautiful but also function intuitively. From wireframing to prototyping and final design implementation, I meticulously tailor every aspect of the user journey to ensure maximum engagement and satisfaction. ",
        logo: services_logo2,
      },
      {
        title: "Front-end and Backend",
        para: "With a focus on performance, security, and scalability, I specialize in building robust backend systems using cutting-edge technologies such as Node.js, Express.js, MongoDB, and MySQL. I specialize in frontend technologies such as HTML, CSS, JavaScript, React.js, and Vue.js. From conceptualizing designs to coding responsive layouts and implementing interactive features.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Online Table and Events Booking",
        image: project1,
      },
      {
        title: "Furniture E-commerce Website",
        image: project2,
      },
      {
        title: "Book an Appointment",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with Rabia was a pleasure. She provided valuable feedback on my web development work, highlighting areas for improvement while also acknowledging the strengths of my contributions. Her constructive criticism helped me refine my skills and deliver even better results on future projects.”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“I was thoroughly impressed by Rabia Khan's web development contributions. They showcased a keen eye for detail and a deep understanding of the technologies involved. [Your Name]'s ability to implement suggestions and refine their work based on feedback is commendable and speaks volumes about their dedication to their craft.”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“Reviewing Rabia Khan's web development work was a rewarding experience. They demonstrated creativity, technical proficiency, and a strong work ethic throughout the project. [Your Name] was receptive to feedback and continuously strived to improve, resulting in impactful contributions to the team.”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“I had the privilege of reviewing Rabia Khan's web development efforts, and I must say, they exceeded expectations. [Your Name] showcased a solid grasp of the project objectives and demonstrated impressive problem-solving skills. Their ability to implement suggestions and iterate on their work reflects their commitment to delivering top-notch results.”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hire me, a proficient web developer, to bring your digital visions to life. With expertise in cutting-edge technologies and a passion for innovation, I'm ready to take your projects to the next level.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "rabiakham789@gmail.com",
        icon: GrMail,
        link: "mailto:rabiakham789@gmail.com",
      },
      {
        text: "+92 3444002102",
        icon: MdCall,
        link: "https://wa.me/3444002102",
      },
      {
        text: "RabiaKhan",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/rabia-khan-37a080253/",
      },
      {
        text: "rabiakhan01",
        icon: GrGithub,
        link: "https://github.com/rabiakhan01",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
