import React, { useContext } from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import { AuthContext } from "../../context/auth-context";
import { logout } from "../../util/firebase.config";

export default function Header(props) {
  const auth = useContext(AuthContext);

  return (
    <AppBar
      position="fixed"
      className={clsx(props.classes.appBar, {
        [props.classes.appBarShift]: props.open,
      })}
      id="appbar"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={props.classes.menuButton}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={props.classes.title} id="title">
          TECHNOVATION
        </Typography>
        {auth.user ? (
          <Button
            color="inherit"
            onClick={logout}
            className={props.classes.button}
          >
            Logout
          </Button>
        ) : (
          <Button color="inherit" className={props.classes.button}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
