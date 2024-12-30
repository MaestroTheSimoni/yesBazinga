import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  unipd,
  unival,
  //starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  scacchi,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freedom Lover",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Engineering",
    company_name: "Univesity of Padova",
    icon: unipd,
    iconBg: "#FFFFFF",
    date: "September 2020",
    points: [
      "Completed a comprehensive Computer Engineering degree with strong academic performance in advanced mathematics, including calculus, linear algebra, and numerical methods.",
      "Mastered fundamental physics concepts and circuit theory through rigorous coursework covering electrical components, network analysis, and electromagnetic principles.",
      "Developed robust programming skills through extensive coursework in multiple languages, algorithms, and software engineering methodologies.",
      " Successfully completed complex laboratory assignments integrating theoretical knowledge with practical applications in both hardware and software domains",
    ],
  },
  {
    title: "Computer Engineering",
    company_name: "University of Valencia",
    icon: unival,
    iconBg: "#FFFFFF",
    date: "Oct 2022",
    points: [
      "Successfully completed advanced coursework in signal processing, focusing on digital filtering techniques and frequency domain analysis.",
      "Mastered complex database management concepts including SQL optimization, transaction management, and database design principles.",
      "Demonstrated strong analytical skills through rigorous examination in system architecture and signal theory, with emphasis on Fourier analysis and system stability.",
      "Gained hands-on experience implementing database solutions and signal processing algorithms through practical laboratory work.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Node.js",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023",
    points: [
      "Initiated web development journey by mastering React fundamentals, including components, state management, and hooks",
      "Expanded skills by building responsive user interfaces and implementing modern React patterns like context API and custom hooks",
      "Developed proficiency in Node.js essentials, including Express.js framework, RESTful API design, and basic server-side operations. ",
      "Gained practical experience with npm package management, asynchronous programming in Node.js, and server deployment fundamentals.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Stirpe",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " ",
    name: "Paperina",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "",
    name: "Pippo",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  //{
    
    //testimonial:
      //"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //name: "Lisa Wang",
    //designation: "CTO",
    //company: "456 Enterprises",
    //image: "https://randomuser.me/api/portraits/women/6.jpg",
  //},
];

const projects = [
  {
    name: "Interactive E-Commerce",
    description:
      "This code serves as a versatile foundation for an e-commerce platform, designed to support infinite customization options for product management, user interactions, payment processing, and tailored user experiences",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MaestroTheSimoni/evershop",
  },
  {
    name: "Chess Program",
    description:
      "A C++ chess program offering robust gameplay mechanics, intelligent AI opponents, and support for custom rules and configurations",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "vscode",
        color: "pink-text-gradient",
      },
    ],
    image: scacchi,
    source_code_link: "https://github.com/MaestroTheSimoni/Progetto-Scacchiera-elettronica",
  },
];
  /*{
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];*/

export { services, technologies, experiences, testimonials, projects };
