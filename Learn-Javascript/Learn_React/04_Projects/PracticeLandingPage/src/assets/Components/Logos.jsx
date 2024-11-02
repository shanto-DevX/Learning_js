import React from "react";

import PRlogo1 from "../image/PLogo_RP1.png";
import PRlogo2 from "../image/PLogo_RP2.png";
import PRlogo3 from "../image/PLogo_RP3.png";
import PRlogo4 from "../image/PLogo_RP4.png";
import PRlogo5 from "../image/PLogo_RP5.png";
import PRlogo6 from "../image/PLogo_RP6.png";
import PRlogo7 from "../image/PLogo_RP7.png";

const Logos = () => {
  return (
    <div>
      <div className="container mx-auto mb-7">
        <div className="logos flex items-center justify-between">
          <img src={PRlogo1} alt="logo" />
          <img src={PRlogo2} alt="logo" />
          <img src={PRlogo3} alt="logo" />
          <img src={PRlogo4} alt="logo" />
          <img src={PRlogo5} alt="logo" />
          <img src={PRlogo6} alt="logo" />
          <img src={PRlogo7} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Logos;
