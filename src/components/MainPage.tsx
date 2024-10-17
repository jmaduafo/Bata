"use client";
import React, { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import Countdown from "./Countdown";
import { motion } from "framer-motion";
import SVG1 from "@/app/images/Bata squigles 1.svg";
import SVG2 from "@/app/images/Bata squigles 2.svg";
import Image from "next/image";

function MainPage() {
  const [count, setCount] = useState(10);

  const slide = {
    initial: {
      scale: 0.9,
      rotateX: 0,
      opacity: 1,
      height: "100%",
    },
    animate: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      height: "100%",
    },
    exit: {
      height: 0,
      opacity: 0,
      rotateX: 10,
      scale: 1,
    },
  };

  return (
    <div className="h-full">
      {/* {
        count > 0 &&
        <motion.section
          variants={slide}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-full flex items-end p-5 bg-black"
        >
          <div>
            <Countdown count={count} setCount={setCount} />
          </div>
        </motion.section>
      } */}
      <div className="relative h-full">
        <div className="absolute bottom-0 left-0 w-[50vw] sm:w-[30vw] z-[0]">
          <Image src={SVG1} alt="bata squiggles" className="w-full" />
        </div>
        <div className="absolute top-0 right-0 w-[50vw] sm:w-[30vw] z-[0]">
          <Image src={SVG2} alt="bata squiggles" className="w-full" />
        </div>
        <section className="z-[1] h-full flex flex-col items-center py-8 w-[95%] xs:w-[80%] sm:w-[65%] lg:w-[60%] xl:w-[50%] mx-auto">
          <div className="mt-auto">
            <Form />
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
