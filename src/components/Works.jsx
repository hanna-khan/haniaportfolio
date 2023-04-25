import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
const posts = [
  {
    id: 1,
    title: "Ecommerce Store",
    href: "#project1",
    description:
      "🎉 I have developed an ecommerce web application using React.js, Redux, Context API, and Axios!  I also implemented dynamic cart functionality that enables seamless navigation and checkout 🛒",

    author: {
      href: "https://thestorecorner.netlify.app/",
      imageUrl: "ecom.png",
    },
  },
  {
    id: 2,
    title: "Weather Application",
    href: "#",
    description:
      "👋 Hey there! I just built a React weather app 🌦️ that utilizes OpenWeatherMap API to fetch data 🌡️, leverages hooks to manage state and update UI 🎣, and converts Unix time to a readable format 🕰️.",

    author: {
      href: "https://weatherproapp-f1e70.web.app/",
      imageUrl: "weather.PNG",
    },
  },
  {
    id: 3,
    title: "Chat Application",
    href: "#",
    description:
      "👨‍💻 Developed a chat application using React 🚀 and added login functionality with error handling and message sending 📩 with image upload feature. Rendered chat feed with read receipts",

    author: {
      href: "https://chattyhub.netlify.app/",
      imageUrl: "chat.PNG",
    },
  },
  {
    id: 4,
    title: "Apple Landing Page",
    href: "#",
    description:
      "Check out my apple landing page design! 🍎👀 Made with HTML and CSS, it's fully responsive for all devices 📱💻🖥️. Come take a bite! 🍏😋",

    author: {
      href: "https://apple-c113b.web.app/",
      imageUrl: "apple.png",
    },
  },
  {
    id: 5,
    title: "Portfolio Web",
    href: "#",
    description:
      " Check out my portfolio website! Created with HTML, CSS, and Bootstrap JS. It's fully responsive and even includes animation effects. 🎉😎👨‍💻.",

    author: {
      href: "https://hanna-khan.github.io/codewithhanna.github.io/iport.html",
      imageUrl: "portfolio.png",
    },
  },
  {
    id: 6,
    title: "Store Website",
    href: "#",
    description:
      "🛍️ I designed an e-commerce store web layout using HTML, CSS, and JS. It's fully responsive, so it looks great on any device! 💻📱",

    author: {
      href: "https://mystore-77017.web.app/",
      imageUrl: "store.png",
    },
  },
  {
    id: 7,
    title: "Furniture Store",
    href: "#",
    description:
      "🛋️🎨🛠️ I designed a furniture store website using HTML and CSS. It's fully responsive, so it looks great on any device! 🌟💻📱",

    author: {
      href: "https://fipsminimalistfurniture.web.app/",
      imageUrl: "furniture.png",
    },
  },
  {
    id: 8,
    title: "Tic Tac Toe Game",
    href: "#",
    description:
      "🎨🕹️ I created a responsive Tic Tac Toe game using HTML, CSS, & JS! 🙌🏼 It was a fun challenge, and I'm proud of the end result.👀",

    author: {
      href: "https://hanna-khan.github.io/Tic-Tac-Toe/",
      imageUrl: "tictactoe.png",
    },
  },
  {
    id: 9,
    title: "Black Jack game",
    href: "#",
    description:
      "🃏🎲 I created a 🔥BLACKJACK game🔥 using HTML, CSS, and JS! It's fully responsive 📱💻, so you can play on any device. Ready to hit 21?",
    author: {
      href: "https://hanna-khan.github.io/BlackjackGame.github.io/",
      imageUrl: "blackjack.png",
    },
  },
  // More posts...
];

export default function Works() {
  return (
    <div id="projects" className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 pl-10">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            WHAT I HAVE DONE SO FAR?
          </p>

          <h4 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.{" "}
          </h4>

          <p className="mt-2 text-lg leading-8 text-white">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>

          <div class="mt-10 flex gap-x-6">
            <a
              href="#project1"
              class="rounded-md bg-[#915eff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              DISCOVER MY PROJECTS BELOW!
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 p-5 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {posts.map((post) => (
            <a target="_blank" href={post.author.href}>
              <article
                key={post.id}
                className="post-card bg-tertiary rounded-lg p-4"
              >
                <div className="post-author">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="rounded-lg pb-8"
                  />
                </div>
                <div className="post-title text-2xl font-bold tracking-tight text-white sm:text-[25px]">
                  {post.title}
                </div>
                <div className="post-description text-base tracking-tight text-white sm:text-base pb-6">
                  {post.description}
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
