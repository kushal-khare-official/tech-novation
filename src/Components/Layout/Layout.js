import React from "react";
import FontFaceObserver from "fontfaceobserver/fontfaceobserver";
import { makeStyles } from "@material-ui/core/styles";
import { Create, Close } from "@material-ui/icons";
import $ from "jquery";

import Header from "../Header/Header";
import Background from "../Background/Background";
import Nav from "../Nav/Nav";
import MobileNav from "../CircularNav/Circularnav";
import Title from "../Title/Title";
import "./Layout.css";

const useStyles = makeStyles((theme) => {
  const drawerWidthClosed = theme.breakpoints.up("sm")
    ? theme.spacing(9) + 1
    : theme.spacing(7) + 1;
  return {
    root: {
      display: "flex",
    },
    appBar: {
      marginLeft: drawerWidthClosed,
      width: "100%",
      zIndex: theme.zIndex.drawer,
      color: "black",
      backgroundColor: "white",
      fontSize: "2rem",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    title: {
      flexGrow: 1,
      fontSize: "3rem",
      fontWeight: "bold",
      textAlign: "center",
      "&.fonts-loaded": {
        fontFamily: "Play, sans-serif",
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  };
});

export default function Layout(props) {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    $("#root").addClass("open");
  };

  const handleDrawerClose = () => {
    $("#root").removeClass("open");
  };

  const toggleForm = () => {
    $("#main-container").toggleClass("expand");
    $("#main-container").children().toggleClass("expand");
    $("#root").toggleClass("expand");
  };

  const playObserver = new FontFaceObserver("Play");
  const tangerineObserver = new FontFaceObserver("Tangerine");
  const robotoObserver = new FontFaceObserver("Roboto");

  Promise.all([
    playObserver.load(),
    tangerineObserver.load(),
    robotoObserver.load(),
  ]).then(() => {
    document.getElementById("root").className += " fonts-loaded";
    document.getElementById("title").className += " fonts-loaded";
  });

  return (
    <>
      <Nav handleDrawerClose={handleDrawerClose} />
      <MobileNav />
      <Background />
      <Title />
      <main>
        <Header classes={classes} handleDrawerOpen={handleDrawerOpen} />
        {/* <div className="backdrop" onClick={toggleForm}></div> */}
        <div id="main-container">
          <Create
            id="form-open"
            fontSize="large"
            style={{ marginTop: "20%", color: "black" }}
            onClick={toggleForm}
          />
          {/* <Close
            id="form-close"
            fontSize="large"
            onClick={toggleForm}
            style={{ color: "black" }}
            align="right"
          /> */}
          <div id="main-content">{props.children}</div>
        </div>
      </main>
    </>
  );
}
