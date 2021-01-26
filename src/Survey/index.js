import React, { useReducer } from "react";
import { SurveyContext } from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Question from "./Question";

const initialState = {
  questions: [
    {
      query: "Why did the chicken cross the road?",
      answers: [
        {
          text: "To get to the other side",
          points: 25,
        },
        {
          text: "Because he felt like it",
          points: 50,
        },
      ],
    },
  ],
  query: "",
};

function surveyReducer(state, action) {
  switch (action.type) {
    case "addAnswer":
      let questionsCopy1 = [...state.questions];
      questionsCopy1[action.index].answers.push(action.payload);
      return { ...state, questions: questionsCopy1 };
    case "addQuery":
      let questionsCopy2 = [...state.questions];
      questionsCopy2.push({
        query: state.query,
        answers: [],
      });
      return {
        ...state,
        questions: questionsCopy2,
        query: "",
      };
    case action.type:
      return {
        ...state,
        [action.type]: action.text,
      };
    default:
      throw new Error("action type not recognized");
  }
}
const Survey = (props) => {
  const useStyles = makeStyles((theme) => ({
    btn: {
      marginLeft: "5px",
      color: theme.palette.text.light,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
      height: "55px",
    },
    formGroup: {
      display: "flex",
      width: "100%",
    },
    formWrapper: {
      width: "100%",
    },
  }));

  const classes = useStyles();

  const [state, dispatch] = useReducer(surveyReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, text: value });
  };

  const addQuery = () => {
    dispatch({ type: "addQuery", text: "hi" });
  };

  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      <div className={classes.formWrapper}>
        <ol>
          {state.questions.map((question, index) => {
            return (
              <Question
                key={index}
                idx={index}
                query={question.query}
                answers={question.answers}
              />
            );
          })}
        </ol>
        <div className={classes.formGroup}>
          <TextField
            name="query"
            color="primary"
            label="Type a new question"
            fullWidth={true}
            multiline
            rowsMax={4}
            value={state.query}
            onChange={handleChange}
            variant="outlined"
          />
          <div>
            <Button
              className={classes.btn}
              aria-label="Add Question"
              onClick={addQuery}
              disabled={state.query ? false : true}
            >
              <AddCircleIcon />
            </Button>
          </div>
        </div>
      </div>
    </SurveyContext.Provider>
  );
};

export default Survey;
