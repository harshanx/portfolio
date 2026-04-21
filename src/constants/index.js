import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  git,
  meta,
  starbucks,
  tesla,
  shopify,

  mulearn,
  iste,
  collbus,
  foodhub,
  autopilot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Cybersecurity Learner",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "ML / NLP Explorer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Sub Execom of CSE Dept",
    company_name: "ISTE GEC Palakkad",
    icon: iste,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - May 2025",
    points: [
      "Served as Sub Executive Committee member of the CSE department at ISTE.",
      "Organized technical events and workshops for the Computer Science department.",
      "Coordinated with faculty and students to promote STEM activities.",
      "Helped drive student engagement in technical and professional development.",
    ],
  },
  {
    title: "Tech Team Member",
    company_name: "μLearn GECSKP",
    icon: mulearn,
    iconBg: "#383E56",
    date: "Apr 2026 - Present",
    points: [
      "Working as a Tech Team Member at μLearn GECSKP campus chapter.",
      "Organizing and coordinating tech events, workshops, and learning sessions.",
      "Collaborating with peers to foster a culture of continuous learning.",
      "Contributing to community-driven projects and skill development initiatives.",
    ],
  },




];


const projects = [
  {
    name: "CollBus",
    description:
      "A real-time college bus tracking system with driver, student, and admin modules. Features live GPS tracking, route management, and secure authentication — built with Flutter and Firebase.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: collbus,
    source_code_link: "https://github.com/harshanx/collbus",
  },
  {
    name: "FoodHub",
    description:
      "A food ordering web application with a clean UI that lets users browse menus, add items to cart, and place orders easily. Built with a focus on responsive design and smooth user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: foodhub,
    source_code_link: "https://github.com/harshanx/foodhub",
  },
];

const featuredProject = {
  name: "AutoPilot AI",
  description:
    "A Flutter mobile app providing automated message replies and missed call handling with Firebase authentication and Razorpay payments.",
  tags: [
    {
      name: "flutter",
      color: "blue-text-gradient",
    },
    {
      name: "firebase",
      color: "green-text-gradient",
    },
    {
      name: "razorpay",
      color: "pink-text-gradient",
    },
  ],
  image: autopilot,
  source_code_link: "https://github.com/harshanx/autopilot",
};


export { services, technologies, experiences, projects, featuredProject };
