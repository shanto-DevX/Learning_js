import React from "react";

const Background = () => {
  return (
    <div>
      <>
        <div className="fixed z-[2] w-full h-screen ">
          {/* For Move Use Absolute */}
          <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">
            Dociments.
          </div>
          {/* For Move Use Absolute */}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-700 text-[13vw] leading-none tracking-normal font-semibold">
            Docs.
          </h1>
        </div>
      </>
    </div>
  );
};

export default Background;
