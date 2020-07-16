import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import Logo from "../../assets/images/logo.png";

const useStylesFacebook = makeStyles((theme) => ({
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

const FacebookCircularProgress = (props) => {
  const classes = useStylesFacebook();

  return (
    <>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={100}
        thickness={2}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={100}
        thickness={2}
        {...props}
      />
    </>
  );
};

const CustomizedProgressBars = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <FacebookCircularProgress
        style={{
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      />
      <img
        src={Logo}
        alt="LOGO"
        height="50px"
        style={{
          position: "absolute",
          top: "calc(50% - 25px)",
          left: "calc(50% - 25px)",
        }}
      />
    </div>
  );
};

export default CustomizedProgressBars;
