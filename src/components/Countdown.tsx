"use client";
import React, { useEffect } from "react";

type Count = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function Countdown({ count, setCount}: Count) {

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        } else return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[35px] h-[35px] rounded-full border-[1px] border-primary flex justify-center items-center">
      <p className="">{count}</p>
    </div>
  );
}

export default Countdown;
