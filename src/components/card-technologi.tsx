"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CardIcon from "./card-icon";

interface TickerProps {
  skills: string[];
}

const Cardtechnologi: React.FC<TickerProps> = ({ skills }) => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      });
    }
  }, [isPaused, controls]);

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        style={{ display: "inline-flex" }}
        animate={controls}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Render dua kali untuk loop seamless */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            style={{ marginRight: 20, cursor: "pointer" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CardIcon type={skill} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cardtechnologi;
