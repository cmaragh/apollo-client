import React from "react";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#3C90C9",
    display: "flex",
    justifyContent: "space-between"
  }
});

const NavbarSmall = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd0c0ab6a-6f1a-4fdb-b38b-7223aa096fa5%2Flogo.png?table=block&id=1e467ea0-54d6-4334-be3e-f93f6b08a01e&width=2610&userId=&cache=v2"
        alt=""
      />
      <Menu />
    </div>
  );
};

export default NavbarSmall;
