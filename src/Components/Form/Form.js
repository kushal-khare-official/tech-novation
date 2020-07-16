import React, { useState } from "react";
import $ from "jquery";
import gsap from "gsap";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  MenuItem,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { Create, Close } from "@material-ui/icons";
import "animate.css";

import axios from "../../util/axios";
import "./Form.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "0.5vh",
      minWidth: "25ch",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
  },
  textField: {
    "& > *": {
      fontWeight: 500,
      minHeight: "40px",
      padding: "8px 5px",
      margin: "5px 0 5px",
      color: "rgba(0, 0, 0, 0.66)",
    },
    "& > * > fieldset": {
      marginTop: "30px",
    },
    "& > *.Mui-focused": {
      fontWeight: "600",
      color: "#000000",
    },
    "& > *.MuiInput-underline:before, & > *.MuiInput-underline:after": {
      borderBottom: "2px solid black",
    },
    "&.form-error": {
      animation: "error 0.8s ease",
    },
    "&.form-error > label, &.form-error > *::before, &.form-error > *::after": {
      color: "red",
      borderBottomColor: "red",
    },
  },
  table: {
    maxHeight: "80%",
    overflow: "auto",
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  button: {
    display: "inline-flex",
    margin: "auto",
    marginTop: theme.spacing(5),
    width: theme.spacing(10),
    fontSize: theme.spacing(1.75),
    fontWeight: 500,
    textTransform: "uppercase",
    padding: 0,
    color: "#ffffff",
    backgroundColor: "#ff9a8b",
    backgroundImage:
      "linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%)",
    borderRadius: theme.spacing(3),
    lineHeight: "32px",
    cursor: "pointer",
    boxShadow:
      "0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149)",
    letterSpacing: "0.25px",
    alignItems: "center",
    height: theme.spacing(6),
  },
}));

const Form = (props) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");

  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [desc, setDesc] = useState("");

  const [suggestionList, setSuggestionList] = useState([]);
  const [editing, setEditing] = useState(null);

  const years = [
    {
      value: "1",
      label: "I",
    },
    {
      value: "2",
      label: "II",
    },
    {
      value: "3",
      label: "III",
    },
    {
      value: "4",
      label: "IV",
    },
  ];

  const catagories = [
    {
      value: "Non-Technical",
      label: "Non-Techncal",
    },
    {
      value: "Technical",
      label: "Technical",
    },
    {
      value: "Gaming",
      label: "Gaming",
    },
  ];

  const isValidEmail = (email) => {
    // eslint-disable-next-line
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
  };

  const onSubmitForm1Handler = (event) => {
    event.preventDefault();

    $(".form-error").removeClass("form-error");

    var formError = false;

    if (name === "") {
      $("#name").parent().parent().addClass("form-error");
      formError = true;
    }
    if (email === "" || !isValidEmail(email)) {
      $("#email").parent().parent().addClass("form-error");
      formError = true;
    }
    if (year === "") {
      $("#year").parent().parent().addClass("form-error");
      formError = true;
    }

    if (!formError) {
      $("#page1")
        .removeClass("animate__slideInRight")
        .addClass("animate__slideOutLeft");
      $("#page2")
        .removeClass("animate__slideOutLeft")
        .addClass("animate__slideInRight");
    }
  };

  const addEventHandler = () => {
    $("#page2")
      .removeClass("animate__slideInRight")
      .addClass("animate__slideOutLeft");
    $("#page3")
      .removeClass("animate__slideOutLeft")
      .addClass("animate__slideInRight");
  };

  const cancelAddEventHandler = () => {
    $("#page3")
      .removeClass("animate__slideInRight")
      .addClass("animate__slideOutLeft");
    $("#page2")
      .removeClass("animate__slideOutLeft")
      .addClass("animate__slideInRight");

    setTitle("");
    setCat("");
    setDesc("");
    setEditing(null);
    $("form-error").removeClass("form-error");
  };

  const editEventHandler = (index) => {
    setEditing(index);
    const event = suggestionList[index];
    setTitle(event.title);
    setCat(event.cat);
    setDesc(event.desc);
    addEventHandler();
  };

  const removeEventHandler = (index) => {
    const updatedSuggestionList = suggestionList.filter(
      (event, i) => i !== index
    );
    setSuggestionList(updatedSuggestionList);
  };

  const onSubmitForm2Handler = () => {
    let button = document.querySelector(".button");

    let getVar = (variable) =>
      getComputedStyle(button).getPropertyValue(variable);

    if (!button.classList.contains("active")) {
      button.classList.add("active");

      gsap.to(button, {
        keyframes: [
          {
            "--left-wing-first-x": 50,
            "--left-wing-first-y": 100,
            "--right-wing-second-x": 50,
            "--right-wing-second-y": 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button, {
                "--left-wing-first-y": 0,
                "--left-wing-second-x": 40,
                "--left-wing-second-y": 100,
                "--left-wing-third-x": 0,
                "--left-wing-third-y": 100,
                "--left-body-third-x": 40,
                "--right-wing-first-x": 50,
                "--right-wing-first-y": 0,
                "--right-wing-second-x": 60,
                "--right-wing-second-y": 100,
                "--right-wing-third-x": 100,
                "--right-wing-third-y": 100,
                "--right-body-third-x": 60,
              });
            },
          },
          {
            "--left-wing-third-x": 20,
            "--left-wing-third-y": 90,
            "--left-wing-second-y": 90,
            "--left-body-third-y": 90,
            "--right-wing-third-x": 80,
            "--right-wing-third-y": 90,
            "--right-body-third-y": 90,
            "--right-wing-second-y": 90,
            duration: 0.2,
          },
          {
            "--rotate": 50,
            "--left-wing-third-y": 95,
            "--left-wing-third-x": 27,
            "--right-body-third-x": 45,
            "--right-wing-second-x": 45,
            "--right-wing-third-x": 60,
            "--right-wing-third-y": 83,
            duration: 0.25,
          },
          {
            "--rotate": 55,
            "--plane-x": -8,
            "--plane-y": 24,
            duration: 0.2,
          },
          {
            "--rotate": 40,
            "--plane-x": 45,
            "--plane-y": -180,
            "--plane-opacity": 0,
            duration: 0.3,
            onComplete() {
              setTimeout(() => {
                button.removeAttribute("style");
                gsap.fromTo(
                  button,
                  {
                    opacity: 0,
                    y: -8,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: 0.3,
                    onComplete() {
                      button.classList.remove("active");
                    },
                  }
                );
              }, 2000);
            },
          },
        ],
      });

      gsap.to(button, {
        keyframes: [
          {
            "--text-opacity": 0,
            "--border-radius": 0,
            "--left-wing-background": getVar("--primary-darkest"),
            "--right-wing-background": getVar("--primary-darkest"),
            duration: 0.1,
          },
          {
            "--left-wing-background": getVar("--primary"),
            "--right-wing-background": getVar("--primary"),
            duration: 0.1,
          },
          {
            "--left-body-background": getVar("--primary-dark"),
            "--right-body-background": getVar("--primary-darkest"),
            duration: 0.4,
          },
          {
            "--success-opacity": 1,
            "--success-scale": 1,
            duration: 0.25,
            delay: 0.25,
          },
        ],
      });
    }

    const order = {
      name,
      email,
      year,
      suggestionList,
    };

    axios
      .post("/suggestion.json", order)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setTimeout(() => {
      $("#root").addClass("form-submitted");
      $("#form-head").addClass("form-submitted");
      $("#page2")
        .removeClass("animate__slideInRight")
        .addClass("animate__slideOutLeft");
      setName("");
      setEmail("");
      setYear("");
      setSuggestionList([]);
    }, 2000);
  };

  const onSubmitForm3Handler = (event) => {
    event.preventDefault();

    $(".form-error").removeClass("form-error");
    var formError = false;

    if (title === "") {
      $("#title").parent().parent().addClass("form-error");
      formError = true;
    }
    if (cat === "") {
      $("#cat").parent().parent().addClass("form-error");
      formError = true;
    }
    if (desc === "") {
      $("#desc").parent().parent().addClass("form-error");
      formError = true;
    }

    if (!formError) {
      const updatedSuggestionList = [...suggestionList];
      const event = { title, cat, desc };
      if (editing !== null) {
        updatedSuggestionList[editing] = event;
      } else {
        updatedSuggestionList.push(event);
      }
      setSuggestionList(updatedSuggestionList);

      $("#page3")
        .removeClass("animate__slideInRight")
        .addClass("animate__slideOutLeft");
      $("#page2")
        .removeClass("animate__slideOutLeft")
        .addClass("animate__slideInRight");

      setTitle("");
      setCat("");
      setDesc("");
      setEditing(null);
      $("form-error").removeClass("form-error");
    }
  };

  return (
    <>
      <div id="form-head">
        <h1 className="pre">Suggestions</h1>
        <p className="pre">Your Idea.... Our Choice</p>
        <h1 className="post">Thanks!</h1>
        <p className="post">We'll be in touch ASAP</p>
      </div>
      <form
        id="page1"
        className={classes.root + " pages animate__animated"}
        onSubmit={onSubmitForm1Handler}
        autoComplete="off"
      >
        <TextField
          className={classes.textField}
          id="name"
          label="NAME"
          fullWidth
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className={classes.textField}
          id="email"
          label="EMAIL"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className={classes.textField}
          id="year"
          select
          label="YEAR"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <Button
          className={classes.button}
          variant="contained"
          size="large"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
      <div id="page2" className="pages animate__animated animate__slideOutLeft">
        <TableContainer component={Paper} className={classes.table}>
          <Table
            stickyHeader
            className={classes.table}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 100 }}>Event</TableCell>
                <TableCell>Catagory</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suggestionList.map((event, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {event.title}
                  </TableCell>
                  <TableCell>{event.cat}</TableCell>
                  <TableCell align="right">
                    <Create onClick={() => editEventHandler(i)} />
                  </TableCell>
                  <TableCell align="right">
                    <Close onClick={() => removeEventHandler(i)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="add-event" onClick={addEventHandler}>
          New
        </div>
        <button className={"button"} onClick={onSubmitForm2Handler}>
          <span className="default">Send</span>
          <span className="success">Sent</span>
          <div className="left"></div>
          <div className="right"></div>
        </button>
      </div>
      <form
        id="page3"
        className={
          classes.root + " pages animate__animated animate__slideOutLeft"
        }
        onSubmit={onSubmitForm3Handler}
        autoComplete="off"
      >
        <TextField
          className={classes.textField}
          id="title"
          label="TITE"
          fullWidth
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          className={classes.textField}
          id="cat"
          select
          label="CATAGORY"
          value={cat}
          onChange={(event) => setCat(event.target.value)}
        >
          {catagories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.textField}
          id="desc"
          label="DESCRIPTION"
          multiline
          rows={4}
          fullWidth
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
        <Button
          className={classes.button}
          variant="contained"
          size="large"
          // color="primary"
          type="submit"
        >
          Submit
        </Button>
        <Button
          className={classes.button}
          style={{
            background: "white",
            color: "#3c4043",
            borderRadius: "5px",
            minWidth: "15ch",
            marginLeft: "2rem",
          }}
          size="large"
          onClick={cancelAddEventHandler}
        >
          Cancel
        </Button>
      </form>
    </>
  );
};

export default Form;
