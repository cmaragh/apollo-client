import React from "react";
import TextContainer from "./TextContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1em 2.5em"
  }
});

const MainContainer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56993b52-55ed-45c4-8db7-d1c6a3f62cbc%2Fperson.png?table=block&id=f5036f0b-854a-4360-b84d-77da3872d0d3&width=730&userId=&cache=v2"
        alt=""
      />
      <TextContainer />
    </div>
  );
};

export default MainContainer;
