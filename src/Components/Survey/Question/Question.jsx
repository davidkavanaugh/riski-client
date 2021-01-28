import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { SurveyContext } from "../../../context";
import css from "./Question.module.css";

const Question = (props) => {
  const { questionIdx, query, image, answers, isDisabled } = props;

  const { responsesState, setResponses } = useContext(SurveyContext);

  const handleChange = (e) => {
    const target = JSON.parse(e.target.value);
    setResponses({
      type: "selectAnswer",
      questionIdx: questionIdx,
      answerIdx: target.idx,
      query: query,
      answer: target.text,
      points: target.points,
    });
  };

  const isChecked = (text) => {
    if (responsesState.questions[questionIdx]) {
      const question = responsesState.questions[questionIdx];
      if (question.answer === text) {
        return true;
      }
    }
    return false;
  };

  return (
    <li>
      <div style={{ fontSize: "17px" }}>{query}</div>
      {image.url && <img src={image.url} alt="additional info" />}
      <RadioGroup onChange={handleChange}>
        {answers.map((answer, index) => {
          return (
            <FormControlLabel
              key={index}
              value={JSON.stringify({
                text: answer.text,
                points: answer.points,
                idx: index,
              })}
              control={<Radio />}
              label={answer.text}
              checked={isChecked(answer.text)}
              disabled={isDisabled()}
            />
          );
        })}
      </RadioGroup>
    </li>
  );
};

export default Question;
