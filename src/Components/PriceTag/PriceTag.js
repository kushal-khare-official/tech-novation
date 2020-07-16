import React from "react";

import "./PriceTag.css";

const PriceTag = (props) => {
  return (
    <div className="price-tag">
      <div className="price">₹{props.price}</div>
    </div>
  );
};

export default PriceTag;
