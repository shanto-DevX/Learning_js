import React from "react";
import image from "../images/image.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const MainPage = () => {
  return (
    <div>
      <div className="main h-lvh flex items-center justify-between  bg-gray-500">
        <div className="card container py-24 px-12 rounded-2xl mx-auto bg-gray-100">
          <div className="card-wrapper flex items-center gap-10 justify-between">
            <div className="card-left basis-2/3	">
              <img src={image} alt="" className="w-44 shadow-md rounded-full" />
              <h1 className="text-4xl font-bold font-body my-4">
                Saiful Islam Shanto
              </h1>
              <div className="desMe font-text text-gray-600 font-normal leading-8 text-xl">
                <p>✺ UI/UX Designer (Freelance/Remote)</p>
                <p>↘ Crafting Aesthetic Experiences</p>
                <p>↗ Mail: letsworkwith.shanto@gmail.com</p>
              </div>
              <div className="dicover ">
                <p className="font-text text-gray-600  mt-6 font-bold leading-8 text-2xl">
                  ↓ Discover More
                </p>
                <div className="imgG flex flex-wrap gap-5 mt-4">
                  <img
                    src={img1}
                    className="w-[30%] max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl object-cover bg-white bottom-1 p-2 rounded-md shadow-md"
                    alt=""
                  />
                  <img
                    src={img2}
                    className="w-[30%] max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl object-cover bg-white bottom-1 p-2 rounded-md shadow-md"
                    alt=""
                  />
                  <img
                    src={img3}
                    className="w-[30%] max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl object-cover bg-white bottom-1 p-2 rounded-md shadow-md"
                    alt=""
                  />
                  <img
                    src={img4}
                    className="w-[30%] max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl object-cover bg-white bottom-1 p-2 rounded-md shadow-md"
                    alt=""
                  />
                  <img
                    src={img5}
                    className="w-[30%] max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl object-cover bg-white bottom-1 p-2 rounded-md shadow-md"
                    alt=""
                  />
                  <img
                    src={img6}
                    className="w-[30%] max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl object-cover bg-white bottom-1 p-2 rounded-md shadow-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="card-right">
              <div className="social-wrapper flex flex-wrap gap-4">
                <div className="social-item hover:bg-blue-50 transition-colors w-[30%] px-8 py-4 rounded-xl bg-white border shadow-sm border-gray-200 ">
                  <div className="icons">
                    <FaFacebook className="bg-[#1877f2] text-white w-10 h-10 p-[9px] rounded-md" />
                    <p className="text-[18px] font-body font-[500] text-gray-800 mt-3">
                      Facebook
                    </p>
                  </div>
                  <div className="userName text-gray-600 font-body font-[500] py-1">
                    @shanto_studio
                  </div>
                  <a
                    href="#"
                    className="bg-white border border-gray-400 px-5 py-1 inline-block rounded-full mt-3 text-gray-800 font-body font-[500] "
                  >
                    follow
                  </a>
                </div>
                <div className="social-item hover:bg-gray-50 transition-colors w-[30%] px-8 py-4 rounded-xl bg-white border shadow-sm border-gray-200 ">
                  <div className="icons">
                    <BsTwitterX className="bg-[#14171a] text-white w-10 h-10 p-[9px] rounded-md" />
                    <p className="text-[18px] font-body font-[500] text-gray-800 mt-3">
                      Twiiter
                    </p>
                  </div>
                  <div className="userName text-gray-600 font-body font-[500] py-1">
                    @shanto_studio
                  </div>
                  <a
                    href="#"
                    className="bg-white border border-gray-400 px-5 py-1 inline-block rounded-full mt-3 text-gray-800 font-body font-[500] "
                  >
                    follow
                  </a>
                </div>
                <div className="social-item hover:bg-blue-50 transition-colors w-[30%] px-8 py-4 rounded-xl bg-white border shadow-sm border-gray-200 ">
                  <div className="icons">
                    <FaLinkedin className="bg-[#0a66c2] text-white w-10 h-10 p-[9px] rounded-md" />
                    <p className="text-[18px] font-body font-[500] text-gray-800 mt-3">
                      Linkedin
                    </p>
                  </div>
                  <div className="userName text-gray-600 font-body font-[500] py-1">
                    @shanto_studio
                  </div>
                  <a
                    href="#"
                    className="bg-white border border-gray-400 px-5 py-1 inline-block rounded-full mt-3 text-gray-800 font-body font-[500] "
                  >
                    follow
                  </a>
                </div>
                <div className="social-item hover:bg-pink-50 transition-colors w-[30%] px-8 py-4 rounded-xl bg-white border shadow-sm border-gray-200 ">
                  <div className="icons">
                    <RiInstagramFill className="bg-[#e1306c] text-white w-10 h-10 p-[5px] rounded-md" />
                    <p className="text-[18px] font-body font-[500] text-gray-800 mt-3">
                      Instagram
                    </p>
                  </div>
                  <div className="userName text-gray-600 font-body font-[500] py-1">
                    @shanto_studio
                  </div>
                  <a
                    href="#"
                    className="bg-white border border-gray-400 px-5 py-1 inline-block rounded-full mt-3 text-gray-800 font-body font-[500] "
                  >
                    follow
                  </a>
                </div>
                <div className="social-item hover:bg-gray-50 transition-colors w-[30%] px-8 py-4 rounded-xl bg-white border shadow-sm border-gray-200 ">
                  <div className="icons">
                    <FaGithub className="bg-[#333] text-white w-10 h-10 p-[9px] rounded-md" />
                    <p className="text-[18px] font-body font-[500] text-gray-800 mt-3">
                      Github
                    </p>
                  </div>
                  <div className="userName text-gray-600 font-body font-[500] py-1">
                    @shanto_studio
                  </div>
                  <a
                    href="#"
                    className="bg-white border border-gray-400 px-5 py-1 inline-block rounded-full mt-3 text-gray-800 font-body font-[500] "
                  >
                    follow
                  </a>
                </div>
                <div className="social-item hover:bg-pink-50 transition-colors w-[30%] px-8 py-4 rounded-xl bg-white border shadow-sm border-gray-200 ">
                  <div className="icons">
                    <FaDribbbleSquare className="bg-[#ea4c89] text-white w-10 h-10 p-[9px] rounded-md" />
                    <p className="text-[18px] font-body font-[500] text-gray-800 mt-3">
                      Dribbble
                    </p>
                  </div>
                  <div className="userName text-gray-600 font-body font-[500] py-1">
                    @shanto_studio
                  </div>
                  <a
                    href="#"
                    className="bg-white border border-gray-400 px-5 py-1 inline-block rounded-full mt-3 text-gray-800 font-body font-[500] "
                  >
                    follow
                  </a>
                </div>
                <div className="social-item hover:bg-blue-50 transition-colors w-[30%] px-8 py-7 rounded-xl bg-white border shadow-sm border-gray-200 ">
                  <div className="icons">
                    <FaSquareBehance className="bg-[#1769ff] text-white w-10 h-10 p-[9px] rounded-md" />
                    <p className="text-[18px] font-body font-[500] text-gray-800 mt-3">
                      Behance
                    </p>
                  </div>
                  <div className="userName text-gray-600 font-body font-[500] py-1">
                    @shanto_studio
                  </div>
                  <a
                    href="#"
                    className="bg-white border border-gray-400 px-5 py-1 inline-block rounded-full mt-3 text-gray-800 font-body font-[500] "
                  >
                    follow
                  </a>
                </div>
                <div className="social-item hover:bg-blue-50 transition-colors w-[62%] px-8 py-7 rounded-xl bg-white border shadow-sm border-gray-200 ">
                  <div className="icons">
                    <IoLogoWhatsapp className="bg-[#128c7e] text-white w-10 h-10 p-[9px] rounded-md" />
                    <p className="text-[24px] font-body font-[600] text-gray-800 my-2">
                      Contact Me
                    </p>
                  </div>
                  <div className="userName text-gray-600 text-2xl font-body font-[500] py-1">
                    +8801400561898 / +8801953332018
                  </div>
                  <a
                    href="#"
                    className="bg-white border border-gray-400 px-5 py-1 inline-block rounded-full mt-3 text-gray-800 font-body font-[500] "
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
