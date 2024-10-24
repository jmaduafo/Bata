"use client";
import React from "react";
import Form from "./Form";
import Footer from "./Footer";
import { motion } from "framer-motion";
import SVG1 from "@/app/images/Bata squigles 1.svg";
import SVG2 from "@/app/images/Bata squigles 2.svg";
import Image from "next/image";

function MainPage() {
  
  const primaryEasing = [0.83, 0, 0.17, 1];

  // const slide = {
  //   initial: {
  //     scale: 0.9,
  //     opacity: 1,
  //     rotateX: 0,
  //   },
  //   animate: {
  //     scale: 1,
  //     opacity: 1,
  //     rotateX: 0,
  //     transition: {
  //       ease: primaryEasing,
  //       duration: 0.7,
  //     },
  //   },
  //   exit: {
  //     scaleY: 0,
  //     transformOrigin: "top",
  //     // opacity: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: primaryEasing,
  //     },
  //   },
  // };

  const appear = {
    initial: {
      scale: 0.85,
      // y: "5%",
      opacity: 0.8,
      // display: "none",
    },
    animate: {
      scale: 1,
      opacity: 1,
      // y: 0,
      // display: "block",
      transition: {
        ease: primaryEasing,
        duration: 0.4
      },
    },
  };

  return (
    <div className="h-full relative">
      {/* <AnimatePresence>
        {count > 0 && (
          <motion.section
            variants={slide}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-[10] origin-center absolute top-0 left-0 h-full w-screen bg-black flex items-end p-5"
          >
            <div className="z-[8]">
              <Countdown count={count} setCount={setCount} />
            </div>
          </motion.section>
        )}
      </AnimatePresence> */}
      <motion.section
        variants={appear}
        // initial={count > 5 && "initial"}
        initial={"initial"}
        // animate={count === 0 && "animate"}
        animate={"animate"}
        className="bg-background relative h-full z-[0]"
      >
        <div className=" absolute bottom-0 left-0 w-[50vw] sm:w-[30vw] z-[0]">
          <Image src={SVG1} alt="bata squiggles" className="w-full" />
        </div>
        <div className="absolute top-0 right-0 w-[50vw] sm:w-[30vw] z-[0]">
          <Image src={SVG2} alt="bata squiggles" className="w-full" />
        </div>
        <div className="z-[1] h-full flex flex-col items-center py-8 w-[95%] xs:w-[80%] sm:w-[65%] lg:w-[60%] xl:w-[40%] mx-auto">
          <div className="mt-auto">
            <Form />
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default MainPage;
