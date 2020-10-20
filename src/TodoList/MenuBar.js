import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToysRoundedIcon from "@material-ui/icons/ToysRounded";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./MenuBar.css";

function MenuBar() {
  const useStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    IconMargin: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyle();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <ToysRoundedIcon className={classes.IconMargin} />
          <Typography variant="h6">Todo</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MenuBar;
