import React, { useContext, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { SurveyContext } from "../Context";
import Answer from "./Answer";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

const Question = (props) => {
  const useStyles = makeStyles((theme) => ({
    actions: {
      display: "flex",
      marginTop: "-3px",
    },
    btnSpacer: {
      width: "15px",
    },
    delete: {
      "&:hover": {
        color: "red",
      },
    },
    edit: {
      "&:hover": {
        color: "black",
      },
    },
    btn: {
      marginLeft: "5px",
      color: theme.palette.text.light,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
      height: "40px",
    },
    formGroup: {
      display: "flex",
      margin: "10px 0px",
      width: "100%",
    },
    formWrapper: {
      width: "100%",
    },
    li: {
      fontSize: "17px",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
  }));

  const classes = useStyles();

  const reducer = (state, action) => {
    return {
      ...state,
      [action.type]: action.payload,
    };
  };

  const [state, setState] = useReducer(reducer, {
    answer: "",
    points: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ type: name, payload: value });
  };

  const { dispatch } = useContext(SurveyContext);

  const { idx, query, answers } = props;
  const { answer, points } = state;

  const addAnswer = async () => {
    await dispatch({
      type: "addAnswer",
      index: idx,
      payload: {
        text: answer,
        points: points,
      },
    });
    ["answer", "points"].forEach((name) => {
      setState({
        type: name,
        payload: "",
      });
    });
  };
  console.log(state);
  return (
    <>
      <li className={classes.li}>
        <span className={classes.wrapper}>
          {query}
          <span className={classes.actions}>
            <IconButton className={classes.edit} size="small" edge="start">
              <EditIcon />
            </IconButton>
            <span className={classes.btnSpacer}></span>
            <IconButton className={classes.delete} size="small" edge="start">
              <DeleteIcon />
            </IconButton>
          </span>
        </span>
      </li>
      <ol type="a" className={classes.li}>
        {answers.map((answer, index) => {
          return (
            <Answer key={index} text={answer.text} points={answer.points} />
          );
        })}
      </ol>
      <div className={classes.formGroup}>
        <TextField
          name="answer"
          color="primary"
          label="Type a new answer"
          fullWidth={true}
          multiline
          rowsMax={4}
          value={answer}
          onChange={handleChange}
          variant="outlined"
          size="small"
        />
        <div style={{ display: "flex" }}>
          <TextField
            name="points"
            type="number"
            color="primary"
            label="Points"
            value={points}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
          <Button
            className={classes.btn}
            aria-label="Add Answer"
            onClick={addAnswer}
            disabled={answer && points ? false : true}
          >
            <AddCircleIcon />
          </Button>
        </div>
      </div>
    </>
  );
};
export default Question;
