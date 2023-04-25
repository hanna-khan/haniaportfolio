const skills = [
  {
    name: "HTML",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/html.png",
  },
  {
    name: "CSS",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/css.png",
  },
  {
    name: "JAVASCRIPT",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/javascript.png",
  },
  {
    name: "REDUX",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/redux.png",
  },
  {
    name: "REACTJS",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/reactjs.png",
  },

  {
    name: "TAILWINDCSS",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/tailwind.png",
  },
  {
    name: "BOOTSTRAP",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/bootstrap.png",
  },
  {
    name: "NEXTJS",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/next.png",
  },
  {
    name: "GIT",
    role: "Co-Founder / CEO",
    imageUrl: "/tech/git.png",
  },
  // More skills...
];

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

export default function Tech() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 pl-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>MY AREAS OF EXPERTISE</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </motion.div>
        <div className="max-w-2xl">
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-3 grid-cols-4 sm:gap-y-16 xl:col-span-2"
          >
            {skills.map((skill) => (
              <li key={skill.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={skill.imageUrl}
                    alt=""
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
