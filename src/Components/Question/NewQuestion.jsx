import React, { useContext, useReducer, useEffect } from "react";
import { SurveyContext } from "../../Context";
import { Button, TextField } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import BlockIcon from "@material-ui/icons/Block";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/newQuestion.styles";
import css from "./NewQuestion.module.css";
const QuestionForm = (props) => {
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  const { state, dispatch } = useContext(SurveyContext);
  const reducer = (state, action) => {
    return {
      ...state,
      [action.type]: action.payload,
    };
  };

  const [questionState, setQuestionState] = useReducer(reducer, {
    question: "",
    image: {
      file: undefined,
      url: "",
    },
  });

  const addQuery = () => {
    dispatch({
      type: "addQuery",
      query: questionState.question,
      image: questionState.image,
    });
    setQuestionState({
      type: "question",
      payload: "",
    });
    setQuestionState({
      type: "image",
      payload: {
        file: undefined,
        url: "",
      },
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuestionState({ type: "question", payload: value });
  };

  const handleImgSelect = (e) => {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.target.files[0];
    reader.onload = (upload) => {
      setQuestionState({
        type: "image",
        payload: {
          file: file,
          url: upload.target.result, // url is base64 string
        },
      });
    };
    reader.readAsDataURL(file);
  };

  const handleImgDeselect = () => {
    setQuestionState({
      type: "image",
      payload: {
        file: undefined,
        url: "",
      },
    });
  };

  return (
    <div className={css.formGroup}>
      <TextField
        name="query"
        className={classes.questionInput}
        color="primary"
        label="Type a new question"
        fullWidth={true}
        multiline
        rowsMax={4}
        value={questionState.question}
        onChange={handleChange}
        variant="outlined"
      />

      {/* SELECTED IMAGE */}
      {questionState.image.url && (
        <div className={css.selected} onClick={handleImgDeselect}>
          <div className={`${css.overlay} ${classes.dangerText}`}>
            <BlockIcon className={css.deleteImgIcon} fontSize="large" />
          </div>
          <img
            className={css.selectedImg}
            src={questionState.image.url}
            alt="selected"
          />
        </div>
      )}

      {/* SELECT AN IMAGE */}

      {!questionState.image.url && (
        <>
          <input
            type="file"
            className={css.hidden}
            accept="image/*"
            id="newQuestionImg"
            name="newQuestionImg"
            onChange={handleImgSelect}
          />

          <label
            htmlFor="newQuestionImg"
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
          onClick={addQuery}
          disabled={questionState.question ? false : true}
        >
          <AddCircleIcon />
        </Button>
      </div>
    </div>
  );
};
export default QuestionForm;
