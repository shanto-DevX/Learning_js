import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, index, reference }) => {
  const colorClass = index % 2 === 0 ? "bg-green-500" : "bg-blue-500";
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 300 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden"
    >
      <LuFileSpreadsheet />
      <p className="text-sm leading-tight mt-5 font-medium">{data.des}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-5 mb-0">
          <h5>{data.fileSize}</h5>
          <span className="h-7 w-7 bg-zinc-600 flex items-center justify-center rounded-full">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <IoCloudDownloadOutline size=".7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tab w-full h-14 ${colorClass} flex items-center justify-center`}
          >
            <h3 className="text-sm font-medium">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
