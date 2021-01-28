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
  }));
  const classes = useStyles();

  return (
    <div className={css.root}>
      <AppBar className={css.appBar} color="inherit" position="fixed">
        <Toolbar className={css.toolBar}>
          <span></span>
          <div className={css.name}>
            {name.first} {name.middle} {name.last}
          </div>
          <div>
            <span className={css.scoreTotal}>Total Score: </span>
            <span className={`${css.score} ${classes.score}`}>{score}</span>
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
