import React, { useEffect, useState, useContext } from "react";
import Axios from "../../util/axios";
import {
  Typography,
  ListItem,
  List,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  CircularProgress,
} from "@material-ui/core";

import Spinner from '../Spinner/Spinner';
import { LoaderContext } from "../../context/loader-context";
import classes from "./Quiz.module.css";

const Quiz = (props) => {
  const [dateTime, setDateTime] = useState(Date.now());
  const [startTime, setStartTime] = useState();
  const [quizTime, setQuizTime] = useState();
  const [question, setQuestion] = useState(null);
  const [data, setData] = useState(null);
  const [timer, setTimer] = useState();
  const [response, setResponse] = useState([]);

  const loader = useContext(LoaderContext);

  useEffect(() => {
    loader.openLoader();
    Axios.get("/GK%20Quiz/start%20time.json")
      .then((res) => {
        setStartTime(new Date(res.data).getTime());
      })
      .then(() => {
        return Axios.get("/GK%20Quiz/timer.json");
      })
      .then((res) => {
        setQuizTime(res.data);
        let responseArray = [];
        for (var i = 0; i < res.data.length; i++) {
          responseArray[i] = 0;
        }
        setResponse(responseArray);
        // loader.closeLoader();
      })
      .catch((err) => {
        console.log(err);
        loader.closeLoader();
      });
  }, []);

  useEffect(() => {
    const id = setInterval(() => setDateTime(Date.now()), 1000);
    if (quizTime && question >= quizTime.length) {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [question, quizTime]);

  useEffect(() => {
    console.log(startTime, quizTime, dateTime, question);
    if (startTime && quizTime && question < quizTime.length) {
      setQuestion(parseInt((dateTime - startTime) / 10000));
      setTimer(
        parseInt((startTime + quizTime[question] * 1000 - dateTime) / 1000)
      );
    }
  }, [startTime, quizTime, question, dateTime]);

  useEffect(() => {
    loader.openLoader();
    if (question != null) {
      let req;
      if (question === 0) {
        req = Axios.get("/GK%20Quiz/rulebook.json");
      } else {
        req = Axios.get(`/GK%20Quiz/question/${question}.json`);
      }
      req
        .then((res) => {
          setData(res.data);
          loader.closeLoader();
        })
        .catch((err) => {
          console.log(err);
          loader.closeLoader();
        });
    }
  }, [question]);

  const responseHandler = (event) => {
    response[question] = event.target.value;
  };

  let display;
  if (question === null) {
    display = (
      <Spinner />
    );
  } else if (question < 0) {
    display = <Typography variant="h2">Quiz has not started yet</Typography>;
  } else if (question === 0 && data) {
    display = (
      <div className={classes.left}>
        <Typography variant="h2">Rule Book</Typography>
        <List>
          {data.map((el, i) => (
            <ListItem key={i}>{el}</ListItem>
          ))}
        </List>
      </div>
    );
  } else if (question < quizTime.length && data) {
    display = (
      <div className={classes.left}>
        <Typography variant="h2">Question {question}</Typography>
        <Typography variant="h4">{data.q}</Typography>
        <Box position="relative">
          <CircularProgress
            variant="static"
            value={(10 - timer) * 10}
            size={80}
            style={{ left: "calc(50% - 40px)", position: "relative" }}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="textSecondary">
              {timer}
            </Typography>
          </Box>
        </Box>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label={"Question Number " + question}
            name={"Question Number " + question}
            value={response[question]}
            onChange={responseHandler}
          >
            <FormControlLabel
              value={`${question}-1`}
              control={<Radio />}
              label={data.o1}
            />
            <FormControlLabel
              value={`${question}-2`}
              control={<Radio />}
              label={data.o2}
            />
            <FormControlLabel
              value={`${question}-3`}
              control={<Radio />}
              label={data.o3}
            />
            <FormControlLabel
              value={`${question}-4`}
              control={<Radio />}
              label={data.o4}
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  } else {
    display = (
      <>
        <Typography variant="h2">Thank You for Participating</Typography>
        <Typography variant="h4">The quiz has Ended</Typography>
      </>
    );
  }

  return (
    <>
      <div className={classes.quiz}>
        <Typography variant="h1" style={{ marginBottom: "20px" }}>
          GK Quiz
        </Typography>
        {display}
      </div>
    </>
  );
};

export default Quiz;
