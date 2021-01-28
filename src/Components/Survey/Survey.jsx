import React, { useReducer, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SurveyContext } from "../../context";
import { TextField } from "@material-ui/core";
import cookie from "js-cookie";
import {
  surveyReducer,
  surveyInitialState,
} from "../../reducers/Survey.reducer";
import {
  responsesReducer,
  responsesInitialState,
} from "../../reducers/Responses.reducer";
import Question from "./Question/Question";
import Scoreboard from "./Scoreboard/Scoreboard";

const Survey = () => {
  const useStyles = makeStyles((theme) => ({
    content: {
      padding: theme.spacing(3),
    },
    textField: {
      margin: theme.spacing(0.5),
    },
  }));
  const classes = useStyles();
  const [surveyState, setSurveyState] = useReducer(
    surveyReducer,
    surveyInitialState
  );

  const [responsesState, setResponses] = useReducer(
    responsesReducer,
    responsesInitialState
  );

  useEffect(() => {
    init();
  }, [cookie.get("survey")]);

  const init = () => {
    if (cookie.get("survey")) {
      setResponses({
        type: "getResponses",
      });
    } else {
      window.scrollTo(0, 0);
      setResponses({
        type: "clearCache",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses({
      type: "updateName",
      property: name,
      payload: value,
    });
  };

  const handleNameErrors = (type) => {
    if (responsesState.name[type].length === 0) {
      return true;
    }
    return false;
  };

  const isDisabled = () => {
    const { first, middle, last } = responsesState.name;
    if (first.length > 0 && middle.length > 0 && last.length > 0) {
      return false;
    }
    return true;
  };

  return (
    <SurveyContext.Provider
      value={{ surveyState, setSurveyState, responsesState, setResponses }}
    >
      <Scoreboard
        name={responsesState.name}
        score={responsesState.total}
        questions={surveyState.questions}
        responses={responsesState.questions}
        isDisabled={isDisabled}
      />
      <div className={classes.content}>
        <TextField
          name="first"
          className={classes.textField}
          color="primary"
          label="First"
          value={responsesState.name.first}
          onChange={handleChange}
          variant="outlined"
          required
          error={handleNameErrors("first")}
        />
        <TextField
          name="middle"
          style={{ width: "100px" }}
          className={classes.textField}
          color="primary"
          label="Middle"
          value={responsesState.name.middle}
          onChange={handleChange}
          variant="outlined"
          required
          error={handleNameErrors("middle")}
        />
        <TextField
          name="last"
          className={classes.textField}
          color="primary"
          label="Last"
          value={responsesState.name.last}
          onChange={handleChange}
          variant="outlined"
          required
          error={handleNameErrors("last")}
        />
        <ol>
          {surveyState.questions.map((question, index) => {
            return (
              <Question
                key={index}
                questionIdx={index}
                query={question.query}
                image={question.image}
                answers={question.answers}
                isDisabled={isDisabled}
              />
            );
          })}
        </ol>
      </div>
    </SurveyContext.Provider>
  );
};

export default Survey;
