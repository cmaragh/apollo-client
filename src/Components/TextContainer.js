import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  }
});

const TextContainer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Your Brand on Your Links</h1>
      <h3>
        Rebrandly is the industry-leading link management platform to brand,
        track and share short URLs using a custom domain name
      </h3>
      <Button>Sign up free</Button>
      <Button>Request a demo</Button>
    </div>
  );
};

export default TextContainer;
