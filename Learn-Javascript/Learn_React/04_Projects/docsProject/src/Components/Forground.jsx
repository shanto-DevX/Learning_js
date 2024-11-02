import React, { useRef } from "react";
import Card from "./Card";

const Forground = () => {
  const ref = useRef(null);
  const data = [
    {
      des: "Dive into the world of efficient documentation with our latest video showcasing a quick task implementation in a ReactJS-powered Docs App! ",
      fileSize: ".4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Doenload Now",
        tagColor: "green",
      },
    },
    {
      des: "Dive into the world of efficient documentation with our latest video showcasing a quick task implementation in a ReactJS-powered Docs App! ",
      fileSize: ".4mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Doenload Now",
        tagColor: "red",
      },
    },
    {
      des: "Dive into the world of efficient documentation with our latest video showcasing a quick task implementation in a ReactJS-powered Docs App! ",
      fileSize: ".4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Doenload Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex  gap-7 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} key={index} reference={ref} />
        ))}
      </div>
    </div>
  );
};

export default Forground;
