"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../app/images/bata_logo.png";
import MessageModal from "./MessageModal";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function Form() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isError, setIsError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="">
      <div className="w-[15vw] object-cover mx-auto">
        <Image src={Logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="w-[70%] mx-auto">
        <p className="text-center">
          Keep up with all future updates by simply entering your email address
          below!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center justify-between gap-3 border-b-[1.5px] border-b-primary px-4 py-2"
      >
        <input
          placeholder="Email"
          type="email"
          className="bg-transparent outline-none w-[90%] placeholder-[#ffffff60]"
        />
        <button
          className="border-none bg-accent px-3 py-1 rounded-full hover:opacity-80 duration-300"
          type="submit"
        >
          <PaperAirplaneIcon className="w-5 text-secondary" />
        </button>
      </form>
      {message ? (
        <div className="mt-3">
          <MessageModal message={message} isError={isError} />
        </div>
      ) : null}
    </div>
  );
}

export default Form;
