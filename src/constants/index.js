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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  next,
  solidity,
  crescent,
  ned,
  pechs,
  chat,
  ecom,
  apple,
  weather,
  certificate1,
  portfolio,
  store,
  tictactoe,
  furniture,
  blackjack,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
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
  // {
  //   name: "Typescript",
  //   icon: typescript,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Next JS",
    icon: next,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: web,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "👨‍💻 As a React JS developer, I've gained extensive experience building numerous projects with Redux, Next JS, and React JS. My proficiency in these frameworks has allowed me to develop scalable, high-performance applications that meet user requirements efficiently. 🚀",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Tesla",
    icon: mobile,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "🎨🌐 As a web designer, I've tackled numerous challenges creating stunning websites and landing pages using HTML, CSS, Tailwind, and Bootstrap. 💻🚀 My passion for design and web development drives me to exceed expectations and deliver exceptional results.👨‍💻",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: creator,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "As a web developer, I have extensive experience creating numerous projects, games, and clones using HTML, CSS, JS, Tailwind, and Bootstrap. My skills in front-end development allow me to build responsive and user-friendly websites that exceed client expectations. 🌟",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: backend,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Maintaining web applications using React.js and other related technologies. This includes creating new features, fixing bugs, and improving the overall performance of the application.",
  //     "Ensure that the web application is responsive and looks great on all devices. This includes testing the application on different screen sizes and making necessary adjustments to ensure that the application is easy to use and navigate.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //   ],
  // },
];

const courses = [
  {
    title: "Certificate Of participation",
    company_name: "DevTown",
    icon: web,
    iconBg: "#383E56",
    image: certificate1,

    date: "April 2023",
    points: [
      "🎓 Excited to share I received a DevTown certificate for completing their 7-day bootcamp on frontend web development using JavaScript and React JS 🚀 with Shaurya Sinha 👨‍🏫. Learned valuable skills for dynamic web page building. Grateful for this opportunity💻🌐",
    ],
  },
  {
    title: "Certificate Of Appreciation",
    company_name: "Tesla",
    icon: mobile,
    iconBg: "#E6DEDD",
    image: certificate1,
    date: "April 2023",
    points: [
      "🎉 Honored to receive a Certificate of Appreciation from DevTown for contributing to their community 🤝🌟. Grateful for the connections and knowledge gained. Excited for future contributions 🚀",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: creator,
  //   iconBg: "#383E56",
  //   // date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "As a web developer, I have extensive experience creating numerous projects, games, and clones using HTML, CSS, JS, Tailwind, and Bootstrap. My skills in front-end development allow me to build responsive and user-friendly websites that exceed client expectations. 🌟",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: backend,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Maintaining web applications using React.js and other related technologies. This includes creating new features, fixing bugs, and improving the overall performance of the application.",
  //     "Ensure that the web application is responsive and looks great on all devices. This includes testing the application on different screen sizes and making necessary adjustments to ensure that the application is easy to use and navigate.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //   ],
  // },
];
const projects = [
  {
    name: "Ecommerce Store",
    description:
      "🎉 I have developed an ecommerce web application using React.js, Redux, Context API, and Axios!🙌 I also implemented dynamic cart functionality that enables seamless navigation and checkout. 🛒",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://thestorecorner.netlify.app/",
  },
  {
    name: "Weather Application",
    description:
      "👋 Hey there! I just built a React weather app 🌦️ that utilizes OpenWeatherMap API to fetch data 🌡️, leverages hooks to manage state and update UI 🎣, and converts Unix time to a readable format 🕰️. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://weatherproapp-f1e70.web.app/",
  },
  {
    name: "Chat Application",
    description:
      "👨‍💻 Developed a chat application using React 🚀 and added login functionality with error handling and message sending 📩 with image upload feature. Rendered chat feed with read receipts",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://chattyhub.netlify.app/",
  },
  {
    name: "Apple Landing Page",
    description:
      "Check out my apple landing page design! 🍎👀 Made with HTML and CSS, it's fully responsive for all devices 📱💻🖥️. Come take a bite! 🍏😋",
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
        name: "ui/ux",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://apple-c113b.web.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "Check out my portfolio website! Created with HTML, CSS, and Bootstrap JS. It's fully responsive and even includes animation effects. 🎉😎👨‍💻.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link:
      "https://hanna-khan.github.io/codewithhanna.github.io/iport.html",
  },
  {
    name: "Store Website",
    description:
      "🛍️ I designed an e-commerce store web layout using HTML, CSS, and JS. It's fully responsive, so it looks great on any device! 💻📱 ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: store,
    source_code_link: "https://mystore-77017.web.app/",
  },
  {
    name: "Furniture Store",
    description:
      "🛋️🎨🛠️ I designed a furniture store website using HTML and CSS. It's fully responsive, so it looks great on any device! 🌟💻📱",
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
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: furniture,
    source_code_link:
      "https://hanna-khan.github.io/codewithhanna.github.io/iport.html",
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "🎨🕹️ I created a responsive Tic Tac Toe game using HTML, CSS, & JS! 🙌🏼 It was a fun challenge, and I'm proud of the end result.👀",
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
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://hanna-khan.github.io/Tic-Tac-Toe/",
  },

  {
    name: "Black Jack game",
    description:
      "🃏🎲 I created a 🔥BLACKJACK game🔥 using HTML, CSS, and JS! It's fully responsive 📱💻, so you can play on any device. Ready to hit 21?",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: blackjack,
    source_code_link: "https://hanna-khan.github.io/BlackjackGame.github.io/",
  },
];

export { services, technologies, experiences, courses, projects };
