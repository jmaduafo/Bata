import React, { Fragment } from "react";
import Socials from "./Socials";

function Footer() {
  const links = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/bataparty",
    },
    {
      title: "TikTok",
      link: "",
    },
  ];
  
  return (
    <div className="">
      <ul className="flex items-center flex-wrap justify-center gap-x-6 gap-y-3">
        {links.map((link, i) => {
          return (
            <Fragment key={link.title}>
              <Socials text={link.title} link={link.link} />
            </Fragment>
          );
        })}
      </ul>
      <div className="flex justify-center items-center mt-4">
        <p className="text-[13px] z-[3]">Organized by</p>
      </div>
    </div>
  );
}

export default Footer;
