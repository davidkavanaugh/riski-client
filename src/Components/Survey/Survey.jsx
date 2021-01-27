import React, { useReducer } from "react";
import { SurveyContext } from "../../Context";
import {
  surveyReducer,
  surveyInitialState,
} from "../../reducers/SurveyReducer";
import Question from "../Question/Question";
import NewQuestion from "../Question/NewQuestion";
import css from "./Survey.module.css";

const Survey = (props) => {
  const [state, dispatch] = useReducer(surveyReducer, surveyInitialState);

  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      <div className={css.formWrapper}>
        {/* CURRENT QUESTIONS */}
        <ol>
          {state.questions.map((question, index) => {
            return (
              <Question
                key={index}
                questionIdx={index}
                image={question.image}
                query={question.query}
                answers={question.answers}
                questionsArr={state.questions}
              />
            );
          })}
        </ol>
        <NewQuestion />
      </div>
    </SurveyContext.Provider>
  );
};

export default Survey;
