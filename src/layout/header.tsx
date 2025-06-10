"use client";

import * as AiIcons from "react-icons/ai";
import { animate, stagger } from "motion";
import { motion, AnimatePresence } from "framer-motion";
import { splitText } from "motion-plus";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const titles = ["System Analyst", "Full-Stack Developer"];

const Header = () => {
  const [index, setIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const iconButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const heading = containerRef.current.querySelector("h1");
      if (heading) {
        const { words: h1Words } = splitText(heading);
        animate(
          h1Words,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: "spring",
            duration: 2,
            bounce: 0,
            delay: stagger(0.05),
          }
        );
      }

      if (iconButtonsRef.current) {
        const buttons = iconButtonsRef.current.querySelectorAll("button");
        animate(
          buttons,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: "spring",
            duration: 1.5,
            bounce: 0,
            delay: (index) => 0.5 + index * 0.05,
          }
        );
      }
    });

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="header" id="home" ref={containerRef}>
      <p>Hi, i am</p>
      <h1>Mohammad Vino Arystio</h1>
      <h2>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={titles[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block" }}
          >
            {titles[index]}
          </motion.div>
        </AnimatePresence>
      </h2>

      <div className="icon-buttons" ref={iconButtonsRef}>
        <Link
          href="https://github.com/movinoary"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiFillGithub className="github" />
          </button>
        </Link>
        <Link
          href="mailto:mohvinoary@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiOutlineGoogle className="google" />
          </button>
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=6285156611224&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiOutlineWhatsApp className="whatsapp" />
          </button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/moh-vino-arystio/"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiFillLinkedin className="linkedin" />
          </button>
        </Link>
        <Link
          href="https://vinoarystio.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <AiIcons.AiFillMediumCircle className="github" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
