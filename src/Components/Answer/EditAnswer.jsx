import React, { useEffect, useReducer, useContext } from "react";
import { SurveyContext } from "../../Context";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";
import css from "./EditAnswer.module.css";
import styles from "../../styles/editAnswer.styles.js";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const EditAnswer = (props) => {
  const { open, closeModal, questionIdx, answerIdx, answers } = props;
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
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

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setState({
      type: "answer",
      payload: answers[answerIdx].text,
    });
    setState({
      type: "points",
      payload: answers[answerIdx].points,
    });
  };

  const handleClose = () => {
    closeModal();
    init();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ type: name, payload: value });
  };
  const handleSubmit = () => {
    dispatch({
      type: "updateAnswer",
      questionIndex: questionIdx,
      answerIndex: answerIdx,
      answer: state.answer,
      points: state.points,
    });
    handleClose();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={css.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={`${classes.paper} ${css.paper}`}>
          <h2>Edit Answer</h2>

          <div className={css.formGroup}>
            <TextField
              name="answer"
              color="primary"
              label="Edit answer"
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
                <CheckCircleIcon />
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
export default EditAnswer;
