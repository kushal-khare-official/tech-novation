import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import "animate.css";

import firebase, {
  signin,
  signup,
  signinWithGoogle,
  signinWithFacebook,
} from "../../util/firebase.config";
import { AuthContext } from "../../context/auth-context";
import "./Login.css";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMode, setLoginMode] = useState(true);

  const history = useHistory();
  const auth = useContext(AuthContext);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      auth.login(user);
      history.push("/");
    } else {
      auth.logout();
    }
  });

  const isValidEmail = (email) => {
    // eslint-disable-next-line
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
  };

  const onSubmitForm1Handler = async (event) => {
    event.preventDefault();

    $(".form-error").removeClass("form-error");

    var formError = false;

    if (email === "" || !isValidEmail(email)) {
      $("#email").parent().parent().addClass("form-error");
      formError = true;
    }
    if (password === "") {
      $("#password").parent().parent().addClass("form-error");
      formError = true;
    }

    if (!formError) {
      if (loginMode) {
        await signin(email, password);
        history.push("/");
      } else {
        let user = await signup(email, password);
        history.push("/profile");
        return user.sendEmailVerification();
      }
    }
  };

  return (
    <>
      <div id="form-head">
        <h1 className="pre">Login</h1>
      </div>
      <form
        id="page1"
        className={classes.root + " pages animate__animated"}
        onSubmit={onSubmitForm1Handler}
        autoComplete="off"
      >
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
          id="password"
          label="PASSWORD"
          fullWidth
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
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
    </>
  );
};

export default Form;
