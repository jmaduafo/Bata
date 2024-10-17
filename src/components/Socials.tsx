"use client";
import React from "react";
import { motion } from "framer-motion";

function Socials({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
 const DURATION = 0.25
 const DELAY = 0.015

  return (
    <li className="z-[3] py-1 px-5 rounded-full border-[1px] border-primary overflow-hidden">
      <motion.a
        initial="initial"
        whileHover="hovered"
        className="relative block whitespace-nowrap overflow-hidden"
        href={link}
        target="_blank"
      >
        <div>
          {text.split("").map((letter, i) => {
            return (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-100%",
                    transition: {
                      delay: i * DELAY,
                      duration: DURATION
                    },
                  },
                }}
                key={`${letter}_${i}`}
                className="inline-block"
              >
                {letter}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0">
          {text.split("").map((letter, i) => {
            return (
              <motion.span
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: 0,
                    transition: {
                      delay: i * DELAY,
                      duration: DURATION
                    },
                  },
                }}
                key={`${letter}_${i}`}
                className="inline-block"
              >
                {letter}
              </motion.span>
            );
          })}
        </div>
      </motion.a>
    </li>
  );
}

export default Socials;
