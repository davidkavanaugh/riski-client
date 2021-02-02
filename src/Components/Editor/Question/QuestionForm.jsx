import React from "react";
import { Button, TextField } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import BlockIcon from "@material-ui/icons/Block";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../styles/questionForm.styles";
import css from "./QuestionForm.module.css";

const QuestionForm = (props) => {
  const {
    idx,
    question,
    questionNumber,
    image,
    onChange,
    onSelect,
    onDeselect,
    onSubmit,
  } = props;
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();

  return (
    <div className={css.formGroup}>
      <TextField
        name="questionNumber"
        type="number"
        color="primary"
        label="#"
        variant="outlined"
        style={{ width: "100px" }}
        value={questionNumber}
        onChange={onChange}
      />
      <span className={css.spacer}></span>
      <TextField
        name="question"
        className={classes.questionInput}
        color="primary"
        label="Type a new question"
        fullWidth={true}
        multiline
        rowsMax={4}
        value={question}
        onChange={onChange}
        variant="outlined"
      />

      {/* SELECTED IMAGE */}
      {image.url && (
        <div className={css.selected} onClick={onDeselect}>
          <div className={`${css.overlay} ${classes.dangerText}`}>
            <BlockIcon className={css.deleteImgIcon} fontSize="large" />
          </div>
          <img className={css.selectedImg} src={image.url} alt="selected" />
        </div>
      )}

      {/* SELECT AN IMAGE */}

      {!image.url && (
        <>
          <input
            type="file"
            className={css.hidden}
            accept="image/*"
            id={`questionImg${idx}`}
            name={`questionImg${idx}`}
            onChange={onSelect}
          />

          <label
            htmlFor={`questionImg${idx}`}
            style={{ cursor: "pointer" }}
            className={`${classes.imgUploadBtn} ${css.imgUploadBtn}`}
          >
            <ImageOutlinedIcon />
          </label>
        </>
      )}

      {/* SUBMIT QUESTION */}
      <div>
        <Button
          className={`${classes.btn} ${css.btn}`}
          aria-label="Add Question"
          onClick={onSubmit}
          disabled={question ? false : true}
        >
          <AddCircleIcon />
        </Button>
      </div>
    </div>
  );
};
export default QuestionForm;
