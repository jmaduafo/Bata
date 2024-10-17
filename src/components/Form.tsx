"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../app/images/bataLogo2.png";
import MessageModal from "./MessageModal";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Loading from "./Loading";

function Form() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("user_email");

    if (!email) {
      setIsError(true);
      setMessage("You must enter your email address before submission");
      setTimeout(() => {
        setMessage(undefined);
      }, 5000);
    } else {
      setLoading(true);
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          setIsError(true);
          setMessage(`Failed to send message.`);

          setTimeout(function () {
            setMessage(undefined);
          }, 5000);
        }

        await response.json();

        setIsError(false)
        setMessage("Message successfully sent!");

        // Just sets success string to an empty string after 5 seconds
        setTimeout(function () {
          setMessage(undefined);
        }, 5000);
        // Set all values to an empty string after message is sent successfully
        setEmail("");
      } catch (err: any) {
        setIsError(true);
        setMessage(err.message);

        setTimeout(function () {
          setMessage(undefined);
        }, 5000);
      }

      setLoading(false);
    }
  }

  return (
    <div className="mb-[6vw]">
      <div className="w-[55%] object-cover mx-auto">
        <Image src={Logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="w-[70%] mx-auto">
        <p className="text-center text-[13.5px] xs:text-[14.5px] lg:text-[16px]">
          Subscribe to be the first to know when the party is about to start!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="z-[3] mt-4 flex items-center justify-between gap-3 border-b-[1.5px] border-b-primary px-4 py-2"
      >
        <input
          placeholder="Email"
          type="email"
          name="user_email"
          className="bg-transparent outline-none w-[90%] placeholder-[#ffffff60]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`${loading ? 'cursor-not-allowed' : 'cursor-pointer'} border-none bg-accent px-3 py-1 rounded-full hover:opacity-80 duration-300`}
          type="submit"
          disabled={loading ?? false }
        >
          {loading ? <Loading/> : <PaperAirplaneIcon className="w-5 text-black" />}
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
