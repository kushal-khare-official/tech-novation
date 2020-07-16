import React from "react";

import "./Events.css";
import "../../assets/css/bootstrap.css";
import Card from "../Card/Card";

import Debate from "../../assets/images/debate.jpg";
import Quiz from "../../assets/images/quiz.jpeg";

const Event = (props) => {
  return (
    <section className="container bootstrap-scope">
      {/* <div className="page-header">
          <h1>
            Material cards demo
            <br />
            <small>
              See full features on{" "}
              <a
                href="https://github.com/marlenesco/material-cards"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </small>
          </h1>
        </div> */}
      <div className="row active-with-click">
        <Card
          name="Dare To Speak"
          altName="English Debate"
          color="Red"
          imgSrc={Debate}
          imgDesc="Debate"
          desc="Hello World"
          price="25"
          event="debate"
        ></Card>
        <Card
          name="Quiz Time"
          altName=" GK Quiz"
          color="Orange"
          imgSrc={Quiz}
          imgDesc="Morgan Freeman"
          price="25"
          desc="Morgan Freeman"
        ></Card>
        <Card
          name="Quiz Time"
          altName=" GK Quiz"
          color="Brown"
          imgSrc={Quiz}
          imgDesc="Morgan Freeman"
          price="25"
          desc="Morgan Freeman"
        ></Card>
      </div>
    </section>
  );
};

export default Event;
