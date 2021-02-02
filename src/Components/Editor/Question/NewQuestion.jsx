import React, { useContext, useReducer, useEffect } from "react";
import { EditorContext } from "../../../context";
import QuestionForm from "./QuestionForm";

const NewQuestion = () => {
  const { state, dispatch } = useContext(EditorContext);
  const reducer = (state, action) => {
    return {
      ...state,
      [action.type]: action.payload,
    };
  };

  const [questionState, setQuestionState] = useReducer(reducer, {
    question: "",
    questionNumber: parseInt(state.questions.length) + 1,
    image: {
      file: undefined,
      url: "",
    },
  });

  const { question, questionNumber, image } = questionState;

  useEffect(() => {
    setQuestionState({
      type: "questionNumber",
      payload: parseInt(state.questions.length) + 1,
    });
  }, [state.questions.length]);

  const handleSubmit = () => {
    let actionIndex = questionNumber;
    if (!actionIndex) {
      actionIndex = parseInt(state.questions.length) + 1;
    }
    if (actionIndex < 1) {
      actionIndex = 1;
    }
    dispatch({
      type: "addQuery",
      query: question,
      index: actionIndex,
      image: image,
    });
    setQuestionState({
      type: "image",
      payload: {
        file: undefined,
        url: "",
      },
    });
    setQuestionState({
      type: "question",
      payload: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionState({ type: name, payload: value });
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
    <QuestionForm
      idx={parseInt(state.questions.length) + 1}
      question={question}
      questionNumber={questionNumber}
      image={image}
      onChange={handleChange}
      onSelect={handleImgSelect}
      onDeselect={handleImgDeselect}
      onSubmit={handleSubmit}
    />
  );
};
export default NewQuestion;
