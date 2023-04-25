import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { courses } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const posts = [
  {
    id: 1,
    title: "Ecommerce Store",
    href: "#project1",
    description:
      "🎉 I have developed an ecommerce web application using React.js, Redux, Context API, and Axios!  I also implemented dynamic cart functionality that enables seamless navigation and checkout 🛒",

    author: {
      href: "https://thestorecorner.netlify.app/",
      imageUrl: "certificate1.png",
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
      imageUrl: "certificate1.png",
    },
  },
  
];

const CourseCard = ({ course }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
    
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: course.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={course.icon}
            alt={course.company_name}
            className="w-[60%] h-[60%] object-contain"
          />

        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{course.title}</h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {course.points.map((point, index) => (
          <li
            key={`course-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>

        ))}
      </ul>
    

    </VerticalTimelineElement>
  );
};

const Courses = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have received so far ?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Courses.
        </h2>
      </motion.div>
     


      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {courses.map((course, index) => (
            <CourseCard key={`course-${index}`} course={course} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Courses, "work");
