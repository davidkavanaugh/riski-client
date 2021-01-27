import React, { useReducer, useContext } from "react";
import { SurveyContext } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styles from "../../styles/newAnswer.styles";
import css from "./NewAnswer.module.css";

const NewAnswer = (props) => {
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  const { idx } = props;
  const { dispatch } = useContext(SurveyContext);
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

  const handleSubmit = async () => {
    await dispatch({
      type: "addAnswer",
      index: idx,
      payload: {
        text: state.answer,
        points: state.points,
      },
    });
    ["answer", "points"].forEach((name) => {
      setState({
        type: name,
        payload: "",
      });
    });
  };

  return (
    <div className={css.formGroup}>
      <TextField
        name="answer"
        color="primary"
        label="Type a new answer"
        fullWidth={true}
        multiline
        rowsMax={4}
        value={state.answer}
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
          value={state.points}
          onChange={handleChange}
          variant="outlined"
          size="small"
        />
        <Button
          style={{ marginLeft: "5px" }}
          className={`${classes.btn} ${css.btn}`}
          aria-label="Add Answer"
          onClick={handleSubmit}
          disabled={state.answer && state.points ? false : true}
        >
          <AddCircleIcon />
        </Button>
      </div>
    </div>
  );
};

export default NewAnswer;
