import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import ViewResults from "../ViewResults/ViewResults";
import css from "./Scoreboard.module.css";

const Scoreboard = (props) => {
  const { name, score, questions, responses, isDisabled } = props;
  const isFinished = () => {
    if (responses.length === questions.length && !isDisabled()) {
      return true;
    }
    return false;
  };
  const useStyles = makeStyles((theme) => ({
    score: {
      color: isFinished()
        ? theme.palette.primary.dark
        : theme.palette.danger.main,
    },
    name: {
      color: isDisabled()
        ? theme.palette.danger.main
        : theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  return (
    <div className={css.root}>
      <AppBar className={css.appBar} color="inherit" position="fixed">
        <Toolbar className={css.toolBar}>
          <div style={{ minWidth: "300px" }}>
            <span className={css.bold}>Name: </span>
            <span className={`${css.bold} ${classes.name}`}>
              {name.first} {name.middle} {name.last}
            </span>
            <div style={{ minWidth: "150px" }}>
              <span className={css.bold}>Total Score: </span>
              <span className={`${css.bold} ${classes.score}`}>{score}</span>
            </div>
          </div>
          <span className={css.btnContainer}>
            {isFinished() && <ViewResults />}
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Scoreboard;
