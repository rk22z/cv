import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGlobal,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiAxios,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiStyledcomponents,
  SiMui,
} from "react-icons/si";

// PRESENTATION SECTION
export const presentationInfo = [
  {
    icon: <AiOutlinePhone fontSize={20} />,
    title: "Phone",
    value: "tel:0745338611",
    displayedValue: "0745 338 611",
  },
  {
    icon: <AiOutlineMail fontSize={20} />,
    title: "Email",
    value: "mailto:robert.zaharencu@gmail.com",
    target: "_blank",
    displayedValue: "robert.zaharencu@gmail.com",
  },
  {
    icon: <AiOutlineGlobal fontSize={20} />,
    title: "Website",
    value: "https://github.com/rk22z",
    target: "_blank",
    displayedValue: "https://github.com/rk22z",
  },
  {
    icon: <AiOutlineHome fontSize={20} />,
    title: "Address",
    value: "https://maps.app.goo.gl/8HBV2N5W2BEFUn5y7",
    target: "_blank",
    displayedValue: "Bucharest, Romania",
  },
];

// ABOUT SECTION
export const aboutText =
  "Highly motivated front-end developer, constantly searching to learn more and evolve. Skilled in HTML, CSS, JavaScript and other modern libraries and frameworks. Currently using my knowledge of React to create responsive and user-friendly websites and web applications.";

// RESUME SECTION
export const skills = [
  {
    id: 1,
    description:
      "More than 3 years of experience in web development using HTML, CSS, JavaScript, React, and other modern libraries and frameworks.",
  },
  {
    id: 2,
    description:
      "Skilled in creating responsive websites and platforms with clean, reusable code, from static pages to fully animated, data-driven applications",
  },
  {
    id: 3,
    description:
      "Experienced in code review, mentoring junior developers, and delivering applications widely used by users across the country.",
  },
];

export const techStack = [
  {
    id: 1,
    icon: <SiHtml5 fontSize={36} />,
    description: "HTML5",
  },
  {
    id: 2,
    icon: <SiCss3 fontSize={36} />,
    description: "CSS3",
  },
  {
    id: 3,
    icon: <SiJavascript fontSize={36} />,
    description: "JavaScript",
  },
  {
    id: 4,
    icon: <SiTypescript fontSize={36} />,
    description: "TypeScript",
  },
  {
    id: 5,
    icon: <SiReact fontSize={36} />,
    description: "React",
  },
  {
    id: 6,
    icon: <SiReactrouter fontSize={36} />,
    description: "React Router",
  },
  {
    id: 7,
    icon: <SiAxios fontSize={36} />,
    description: "Axios",
  },
  {
    id: 8,
    icon: <SiRedux fontSize={36} />,
    description: "Redux",
  },
  {
    id: 9,
    icon: <SiTailwindcss fontSize={36} />,
    description: "Tailwind CSS",
  },
  {
    id: 10,
    icon: <SiSass fontSize={36} />,
    description: "SASS",
  },
  {
    id: 11,
    icon: <SiStyledcomponents fontSize={36} />,
    description: "Styled Components",
  },
  {
    id: 12,
    icon: <SiMui fontSize={36} />,
    description: "Material UI",
  },
];

export const experience = [
  {
    id: 0,
    title: "Front-End Developer",
    company: "Nova Matter",
    period: " July 2023 - Present",
  },
  {
    id: 1,
    title: "Front-End Developer",
    company: "WTZ Technologies",
    period: " October 2021 - June 2023",
  },
  {
    id: 2,
    title: "Technical Support Engineer",
    company: "Stefanini EMEA",
    period: " December 2018 - October 2019",
  },
];

export const keyAchievements = [
  {
    id: 1,
    description:
      "Developed a fully functional, responsive website for a local business, increasing their online presence and customer engagement.",
  },
  {
    id: 2,
    description:
      "Created a user-friendly web application that allows users to track their daily expenses and manage their budget.",
  },
  {
    id: 3,
    description:
      "Led a team of 3 junior developers, providing guidance and support in the development of a new platform for a local startup.",
  },
];

// CONTACT SECTION

export const socialMediaInfo = [
  {
    icon: <AiOutlineLinkedin fontSize={24} />,
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/robert-gabriel-zaharencu-930a77172/",
    target: "_blank",
  },
  {
    icon: <AiOutlineInstagram fontSize={24} />,
    title: "Instagram",
    value: "https://www.instagram.com/robertzaharencu/",
    target: "_blank",
  },
  {
    icon: <AiOutlineFacebook fontSize={24} />,
    title: "Facebook",
    value: "https://www.facebook.com/profile.php?id=100007872167896",
    target: "_blank",
  },
];
