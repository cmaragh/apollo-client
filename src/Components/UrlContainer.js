import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./UrlContainer.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  btn: {
    backgroundColor: "#3C90C9"
  }
});

const UrlContainer = (props) => {
  const classes = useStyles();

  return (
    <div className="url-container">
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <input
            style={{ textAlign: "center", margin: "1em" }}
            type="text"
            id="url"
            placeholder="Make your links shorter"
          />
          <input
            style={{ textAlign: "center", margin: "0 1em 1em 1em" }}
            type="text"
            id="slug"
            placeholder="Custom slug"
          />
          <Button className={classes.btn}>Shorten URL</Button>
          <p style={{ color: "white" }}>
            By clicking shorten, you agree to Rebrandly's Terms of Use and
            Privacy Policy
          </p>
        </div>
      </form>
    </div>
  );
};

export default UrlContainer;
