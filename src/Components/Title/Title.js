import React from "react";
import { StyleSheet, css } from "aphrodite";
import vanishIn from "react-magic/lib/bling/vanishIn";

import "./Title.css";

const styles = StyleSheet.create({
  magic: {
    animationName: vanishIn,
    animationDuration: "2s",
  },
});

const Title = (props) => {
  return (
    <>
      <div className="wrapper animate__animated animate__fadeInDown"></div>
      <div className={"title-content animate__animated " + css(styles.magic)}>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="text">TECHNOVATION</div>
        <div className="fromHome animate__animated animate__zoomIn animate__delay-4s">
          from Home
        </div>
      </div>
    </>
  );
};

export default Title;
