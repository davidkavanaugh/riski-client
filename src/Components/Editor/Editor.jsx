import React, { useReducer } from "react";
import { EditorContext } from "../../context";
import {
  editorReducer,
  editorInitialState,
} from "../../reducers/Editor.reducer";
import Question from "./Question/Question";
import NewQuestion from "./Question/NewQuestion";
import css from "./Editor.module.css";

const Editor = (props) => {
  const [state, dispatch] = useReducer(editorReducer, editorInitialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
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
    </EditorContext.Provider>
  );
};

export default Editor;
