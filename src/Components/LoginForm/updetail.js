import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { useStyles } from "../../util/style";
const Cllgdata = () => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{
        position: "relative",
      }}
    >
      <CardHeader
        title={<span className="login-title">BASIC INFO</span>}
        className={classes.header}
        align="center"
      ></CardHeader>

      <CardContent className={classes.content}>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel id="semester">Semester</InputLabel>
            <Select
              labelId="semester"
              id="semester"
              className={classes.selectEmpty}
              MenuProps={{ classes: { paper: classes.select } }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="branch">Branch</InputLabel>
            <Select
              labelId="branch"
              id="branch"
              className={classes.selectEmpty}
              MenuProps={{ classes: { paper: classes.select } }}
            >
              <MenuItem value={1}>CSE</MenuItem>
              <MenuItem value={2}>ELEX</MenuItem>
              <MenuItem value={3}>EE</MenuItem>
              <MenuItem value={4}>IP</MenuItem>
              <MenuItem value={5}>IC</MenuItem>
              <MenuItem value={6}>CIVIL</MenuItem>
              <MenuItem value={7}>MECHANICAL</MenuItem>
            </Select>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
};
export default Cllgdata;
