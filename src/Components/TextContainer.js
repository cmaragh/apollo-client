import React from "react";
import { Button } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  btn: {
    backgroundColor: "#3C90C9"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3C90C9",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

const TextContainer = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <h1>Your Brand on Your Links</h1>
        <h3>
          Rebrandly is the industry-leading link management platform to brand,
          track and share short URLs using a custom domain name
        </h3>
        <Button size="small" color="primary" variant="contained">
          Sign up free
        </Button>
        <Button>Request a demo</Button>
      </div>
    </ThemeProvider>
  );
};

export default TextContainer;
