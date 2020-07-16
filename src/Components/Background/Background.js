import React from "react";

import "./Background.css";
import { ReactComponent as ArrowUp } from "../../assets/images/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow-down.svg";
import { ReactComponent as DottedCircle } from "../../assets/images/dotted-circle.svg";

const Background = (props) => {
  return (
    <figure className="intro">
      <div className="arrow arrow--top">
        <ArrowUp />
      </div>
      <div className="arrow arrow--bottom">
        <ArrowDown />
      </div>
      <div className="main">
        <div className="main__svgs">
          <DottedCircle />
        </div>
      </div>
    </figure>
  );
};

export default Background;
