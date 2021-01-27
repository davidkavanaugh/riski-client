import React, { useContext, useReducer } from "react";
import { SurveyContext } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import IconButton from "@material-ui/core/IconButton";
import EditAnswer from "./EditAnswer";
import css from "./Answer.module.css";
import styles from "../../styles/answer.styles";

const Answer = (props) => {
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  const { answerIdx, questionIdx, answers, text, points } = props;
  const { dispatch } = useContext(SurveyContext);
  const reducer = (state, action) => {
    return {
      ...state,
      [action.type]: action.payload,
    };
  };

  const [state, setState] = useReducer(reducer, {
    open: false,
  });

  const handleDeleteAnswer = (answerIndex, questionIndex) => {
    dispatch({
      type: "deleteAnswer",
      answerIdx: answerIndex,
      questionIdx: questionIndex,
    });
  };

  const openModal = () => {
    setState({
      type: "open",
      payload: true,
    });
  };

  const closeModal = () => {
    setState({
      type: "open",
      payload: false,
    });
  };

  return (
    <li>
      <span className={css.li}>
        <span>{text}</span>
        <span className={css.wrapper}>
          <span className={classes.points}>{points}</span>
          <span className={css.actions}>
            <IconButton
              className={classes.edit}
              size="small"
              edge="start"
              onClick={openModal}
            >
              <EditOutlinedIcon />
            </IconButton>
            <span className={css.btnSpacer}></span>
            <IconButton
              className={classes.delete}
              size="small"
              edge="start"
              onClick={() => handleDeleteAnswer(answerIdx, questionIdx)}
            >
              <ClearIcon />
            </IconButton>
          </span>
        </span>
      </span>
      <EditAnswer
        open={state.open}
        closeModal={closeModal}
        answerIdx={answerIdx}
        questionIdx={questionIdx}
        answers={answers}
      />
    </li>
  );
};
export default Answer;
