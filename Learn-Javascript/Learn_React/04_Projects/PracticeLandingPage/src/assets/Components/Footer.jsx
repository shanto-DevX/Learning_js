import React from "react";

import fb from "../image/icon/facebook-01-1.svg";
import tw from "../image/icon/new-twitter-2.svg";
import ld from "../image/icon/linkedin-01-5.svg";
import gh from "../image/icon/github-01-1.svg";
import db from "../image/icon/dribbble-5.svg";

const Footer = () => {
  return (
    <div className="FooterBG h-5 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="footer-wrapper ">
          <div className="social-items flex gap-3 py-4 items-center justify-center">
            <a href="#" className="bg-white p-2 rounded-full">
              <img src={fb} alt="" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full">
              <img src={tw} alt="" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full">
              <img src={ld} alt="" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full">
              <img src={gh} alt="" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full">
              <img src={db} alt="" />
            </a>
          </div>
          <p className="text-center text-white fw-semibold text-1xl">
            &copy; Design DevXshanto | 27 Oct 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
