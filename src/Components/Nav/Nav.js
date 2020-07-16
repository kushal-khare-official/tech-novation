import React from "react";
import ReactDOM from "react-dom";
// import Particles from "react-particles-js";
import { Close } from "@material-ui/icons";

import "./Nav.css";

const NewNav = (props) => {
  return ReactDOM.createPortal(
    <>
      <Close
        fontSize="large"
        onClick={props.handleDrawerClose}
        align="left"
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
          fontSize: "4rem",
          color: "#fff",
          cursor: "pointer",
        }}
      />
      {/* <Particles
        params={{
          particles: {
            number: {
              value: "150",
              density: "true",
            },
            color: "#444",
            line_linked: {
              color: "#ccc",
              shadow: {
                enable: true,
                color: "#ccc",
                blur: 5,
              },
            },
            size: {
              value: "5",
              random: "true",
            },
          },
        }}
        style={{
          width: "100%",
          zIndex: "-1",
          position: "fixed",
          height: "100%",
        }}
      /> */}
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-items">Home</li>
          <li className="nav-items">Event</li>
          <li className="nav-items">Team</li>
          <li className="nav-items">Schedule</li>
          <li className="nav-items">About</li>
        </ul>
      </div>
    </>,
    document.getElementById("navigation")
  );
};

export default NewNav;
