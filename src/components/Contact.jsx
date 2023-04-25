import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] leading-[60px]"
>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex">
          <div className="flex mt-5">
            <p className="flex- px-3">
              <a href="">Github</a>
            </p>
            <p className="flex-1 px-3">
              <a href="">Email</a>
            </p>
            <p className="flex-1 px-3">
              <a href="">Instagram</a>
            </p>
            <p className="flex-1 px-3">
              <a href="">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="info mt-4 flex">
          <div>
            <a className="p-1 flex-col" href="mailto:">
              codewithhanna@gmail.com
            </a>
          </div>
          <div>
            <a className="p-1 flex-col" href="tel:+923051707303">
              +923051707303
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
