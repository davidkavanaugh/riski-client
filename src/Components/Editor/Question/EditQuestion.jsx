import React, { useContext, useReducer, useState, useEffect } from "react";
import { EditorContext } from "../../../context";
import { Dialog, DialogContent, Backdrop } from "@material-ui/core";
import QuestionForm from "./QuestionForm";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import css from "./EditQuestion.module.css";

const EditQuestion = (props) => {
  const { idx, open, closeModal } = props;
  const { state, dispatch } = useContext(EditorContext);

  const reducer = (state, action) => {
    return {
      ...state,
      [action.type]: action.payload,
    };
  };

  const [questionState, setQuestionState] = useReducer(reducer, {
    question: state.questions[idx].query,
    questionNumber: parseInt(idx) + 1,
  });
  const { question, questionNumber } = questionState;

  const [image, setImage] = useState(state.questions[idx].image);

  useEffect(() => {
    setQuestionState({
      type: "question",
      payload: state.questions[idx].query,
    });
    setQuestionState({
      type: "questionNumber",
      payload: parseInt(idx) + 1,
    });
    setImage(state.questions[idx].image);
  }, [state.questions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionState({ type: name, payload: value });
  };

  const handleClose = () => {
    closeModal();
    setQuestionState({
      type: "question",
      payload: state.questions[idx].query,
    });
    setQuestionState({
      type: "questionNumber",
      payload: parseInt(idx) + 1,
    });
    setImage(state.questions[idx].image);
  };

  const handleImgSelect = (e) => {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.target.files[0];
    reader.onload = (upload) => {
      setImage({
        file: undefined,
        url: upload.target.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleImgDeselect = () => {
    setImage({
      file: undefined,
      url: "",
    });
  };

  const handleSubmit = () => {
    let tempQuestionNumber = questionNumber;
    if (!tempQuestionNumber) {
      tempQuestionNumber = parseInt(idx) + 1;
    }
    if (tempQuestionNumber < 0) {
      tempQuestionNumber = 1;
    }
    if (tempQuestionNumber > parseInt(state.questions.length) + 1) {
      tempQuestionNumber = parseInt(state.questions.length);
    }

    dispatch({
      type: "updateQuestion",
      questionIndex: idx,
      query: question,
      image: image,
      questionNumber: tempQuestionNumber,
    });
    handleClose();
  };
  return (
    <div>
      <Dialog
        maxWidth="lg"
        fullWidth={true}
        className={css.dialog}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <DialogContent style={{ paddingTop: "10px", paddingBottom: "25px" }}>
          <h2>Edit Question</h2>
          <div style={{ width: "800px" }}>
            <QuestionForm
              idx={idx}
              question={question}
              questionNumber={questionNumber}
              image={image}
              onChange={handleChange}
              onSelect={handleImgSelect}
              onDeselect={handleImgDeselect}
              onSubmit={handleSubmit}
              submitBtnIcon={<CheckCircleIcon />}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditQuestion;
