import React, { useEffect, useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
import $ from "jquery";
import { Check } from "@material-ui/icons";
// import { Card, CardHeader, CardContent } from "@material-ui/core";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import firebase, {
  signin,
  signup,
  signinWithGoogle,
  signinWithFacebook,
} from "../../util/firebase.config";
import "./LoginForm.css";
import { AuthContext } from "../../context/auth-context";
// import { useStyles } from "../../util/style";
// import logo from "../../assets/logo.png";

const LoginForm = (props) => {
  // const classes = useStyles();

  useEffect(() => {
    $(function () {
      $(".input input")
        .focus(function () {
          $(this)
            .parent(".input")
            .each(function () {
              $("label", this).css({
                "line-height": "18px",
                "font-size": "18px",
                "font-weight": "100",
                top: "0px",
              });
              $(".spin", this).css({
                width: "100%",
              });
            });
        })
        .blur(function () {
          $(".spin").css({
            width: "0px",
          });
          if ($(this).val() === "") {
            $(this)
              .parent(".input")
              .each(function () {
                $("label", this).css({
                  "line-height": "60px",
                  "font-size": "24px",
                  "font-weight": "300",
                  top: "10px",
                });
              });
          }
        });

      $(".button").click(function (e) {
        var pX = e.pageX,
          pY = e.pageY,
          oX = parseInt($(this).offset().left),
          oY = parseInt($(this).offset().top);

        $(this).append(
          '<span className="click-efect x-' +
            oX +
            " y-" +
            oY +
            '" style="margin-left:' +
            (pX - oX) +
            "px;margin-top:" +
            (pY - oY) +
            'px;"></span>'
        );
        $(".x-" + oX + ".y-" + oY + "").animate(
          {
            width: "500px",
            height: "500px",
            top: "-250px",
            left: "-250px",
          },
          600
        );
        $("button", this).addClass("active");
      });

      $(".alt-2").click(function () {
        if (!$(this).hasClass("material-button")) {
          $(".shape").css({
            width: "100%",
            height: "100%",
            transform: "rotate(0deg)",
          });

          setTimeout(function () {
            $(".overbox").css({
              overflow: "initial",
            });
          }, 600);

          $(this).animate(
            {
              width: "140px",
              height: "140px",
            },
            500,
            function () {
              $(".box").removeClass("back");

              $(this).removeClass("active");
            }
          );

          $(".overbox .title").fadeOut(300);
          $(".overbox .input").fadeOut(300);
          $(".overbox .button").fadeOut(300);

          $(".alt-2").addClass("material-buton");
        }
      });

      $(".material-button").click(function () {
        if ($(this).hasClass("material-button")) {
          setTimeout(function () {
            $(".overbox").css({
              overflow: "hidden",
              top: "-88%",
            });
            $(".box").addClass("back");
          }, 200);
          $(this).addClass("active").animate({
            width: "1100px",
            height: "1100px",
          });

          setTimeout(function () {
            $(".shape").css({
              width: "50%",
              height: "50%",
              transform: "rotate(45deg)",
            });

            $(".overbox .title").fadeIn(300);
            $(".overbox .input").fadeIn(300);
            $(".overbox .button").fadeIn(300);
          }, 700);

          $(this).removeClass("material-button");
        } else {
          setTimeout(function () {
            $(".overbox").css({
              overflow: "initial",
              top: "0",
            });
            $(".box").removeClass("back");
          }, 200);
          $(this)
            .animate({
              width: "140px",
              height: "140px",
            })
            .removeClass("active");
        }

        if ($(".alt-2").hasClass("material-buton")) {
          $(".alt-2").removeClass("material-buton");
          $(".alt-2").addClass("material-button");
        }
      });
    });
  }, []);

  // const history = useHistory();
  const auth = useContext(AuthContext);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      auth.login(user);
    } else {
      auth.logout();
    }
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (event, field) => {
    if (field === "name") {
      setName(event.target.value);
    }
    if (field === "email") {
      setEmail(event.target.value);
    }
    if (field === "password") {
      setPassword(event.target.value);
    }
  };

  const onSubmitHandler = async (loginMode) => {
    if (loginMode) {
      await signin(email, password);
      // history.push("/");
    } else {
      let user = await signup(email, password);
      // history.push("/");
      return user.sendEmailVerification();
    }
  };

  return (
    <div className="materialContainer">
      <div className="box">
        <div className="title">LOGIN</div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => onChangeHandler(event, "email")}
          />
          <span className="spin"></span>
        </div>

        <div className="input">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            onChange={(event) => onChangeHandler(event, "password")}
          />
          <span className="spin"></span>
        </div>

        <div className="button login">
          <button onClick={() => onSubmitHandler(true)}>
            <span>GO</span>{" "}
            <i className="fa">
              <Check fontSize="large" />
            </i>
          </button>
        </div>

        <div className="button login social-button" id="google-connect">
          <button
            onClick={() => {
              signinWithGoogle();
              // history.push("/");
            }}
          >
            <span>GOOGLE</span>
          </button>
        </div>

        <div className="button login social-button" id="facebook-connect">
          <button
            onClick={() => {
              signinWithFacebook();
              // history.push("/");
            }}
          >
            <span>FACEBOOK</span>
          </button>
        </div>

        <a href="/" className="pass-forgot">
          Forgot your password?
        </a>
      </div>

      <div className="overbox">
        <div className="material-button alt-2">
          <span className="shape"></span>
        </div>

        <div className="title">REGISTER</div>

        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => onChangeHandler(event, "name")}
          />
          <span className="spin"></span>
        </div>

        <div className="input">
          <label htmlFor="email2">Email</label>
          <input
            type="email"
            name="email2"
            id="email2"
            value={email}
            onChange={(event) => onChangeHandler(event, "email")}
          />
          <span className="spin"></span>
        </div>

        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => onChangeHandler(event, "password")}
          />
          <span className="spin"></span>
        </div>

        <div className="button">
          <button onClick={() => onSubmitHandler(false)}>
            <span>NEXT</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

//   <Card
//     id="LoginForm"
//     className={classes.root}
//     style={{
//       position: "relative",
//       minHeight: "950px",
//     }}
//   >
//     <CardHeader
//       title={<span className="login-title">LOGIN</span>}
//       align="center"
//       // style={{ color: "white" }}
//     ></CardHeader>

//     <CardContent>
//       <hr
//         style={{
//           border: "none",
//           borderTop: "2px solid white",
//           marginBottom: "4rem",
//         }}
//       />
//       <img
//         src={logo}
//         alt="logo"
//         style={{
//           width: "100%",
//           position: "absolute",
//           top: "150px",
//           left: "0",
//           opacity: "0.5",
//         }}
//       />
//       <StyledFirebaseAuth
//         uiConfig={uiConfig}
//         firebaseAuth={auth}
//       ></StyledFirebaseAuth>
//     </CardContent>
//   </Card>
