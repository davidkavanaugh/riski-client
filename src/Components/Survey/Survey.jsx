import React, { useReducer, useEffect } from "react";
import { SurveyContext } from "../../context";
import {
  surveyReducer,
  surveyInitialState,
} from "../../reducers/Survey.reducer";
import {
  responsesReducer,
  responsesInitialState,
} from "../../reducers/Responses.reducer";
import Question from "./Question/Question";
import cookie from "js-cookie";

const Survey = () => {
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
      setResponses({
        type: "clearCache",
      });
    }
  };
  return (
    <SurveyContext.Provider
      value={{ surveyState, setSurveyState, responsesState, setResponses }}
    >
      <ol>
        {surveyState.questions.map((question, index) => {
          return (
            <Question
              key={index}
              questionIdx={index}
              query={question.query}
              image={question.image}
              answers={question.answers}
            />
          );
        })}
      </ol>
    </SurveyContext.Provider>
  );
};

export default Survey;
