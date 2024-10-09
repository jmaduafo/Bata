import React, { Fragment } from "react";
import Socials from "./Socials";

function Footer() {
  const links = [
    {
      title: "Instagram",
      link: "",
    },
    {
      title: "TikTok",
      link: "",
    },
    {
      title: "Facebook",
      link: "",
    },
    // {
    //     title: "",
    //     link: ""
    // },
  ];
  return (
    <div>
      <ul className="flex items-center gap-6">
        {links.map((link, i) => {
          return (
            <Fragment key={link.title}>
              <Socials text={link.title} link={link.link} index={i} />
            </Fragment>
          );
        })}
      </ul>
      <div className="flex justify-center items-center mt-4">
        <p className="text-[13px]">Organized by</p>
      </div>
    </div>
  );
}

export default Footer;
