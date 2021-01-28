import React, { useContext, useReducer, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EditorContext } from "../../../context";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  Backdrop,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import BlockIcon from "@material-ui/icons/Block";
import css from "./EditQuestion.module.css";
import styles from "../../../styles/editQuestion.styles";

const useStyles = makeStyles((theme) => styles(theme));

const EditQuestion = (props) => {
  const classes = useStyles();
  const { idx, open, closeModal } = props;
  const { state, dispatch } = useContext(EditorContext);

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

  useEffect(() => {
    setQuestionState({
      type: "question",
      payload: state.questions[idx].query,
    });
    setQuestionState({
      type: "image",
      payload: {
        file: state.questions[idx].image.file,
        url: state.questions[idx].image.url,
      },
    });
  }, []);

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

  const handleSubmit = () => {
    dispatch({
      type: "updateQuestion",
      questionIndex: idx,
      query: questionState.question,
      image: questionState.image,
    });
    handleClose();
  };

  const handleClose = () => {
    closeModal();
    setQuestionState({
      type: "image",
      payload: {
        file: state.questions[idx].image.file,
        url: state.questions[idx].image.url,
      },
    });
    setQuestionState({
      type: "question",
      payload: state.questions[idx].query,
    });
  };

  return (
    <div>
      <Dialog
        className={css.dialog}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <DialogContent style={{ paddingTop: "10px" }}>
          <h2>Edit Question</h2>
          {/* TEXT INPUT */}
          <div className={css.formGroup}>
            <TextField
              name="query"
              className={classes.questionInput}
              color="primary"
              label="Edit question"
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
            {!questionState.image.url && ( // only display btn if no image is selected
              <>
                <input
                  type="file"
                  className={css.hidden}
                  accept="image/*"
                  id={`questionImg${idx}`}
                  name="logo"
                  onChange={handleImgSelect}
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
                aria-label="Update Question"
                onClick={handleSubmit}
                disabled={questionState.question ? false : true}
              >
                <CheckCircleIcon />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditQuestion;
