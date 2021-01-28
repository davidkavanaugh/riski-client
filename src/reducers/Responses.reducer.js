import cookie from "js-cookie";

export const responsesInitialState = {
  name: {
    first: "",
    middle: "",
    last: "",
  },
  questions: [],
  total: 0,
};

export const responsesReducer = (state, action) => {
  switch (action.type) {
    case "clearCache":
      return responsesInitialState;
    case "getResponses":
      let cache = cookie.getJSON("survey");
      return {
        ...state,
        name: cache.name,
        questions: cache.questions,
        total: cache.total,
      };
    case "selectAnswer":
      let selectAnswerQuestionsCopy = [...state.questions];
      let newTotal = state.total;
      if (!selectAnswerQuestionsCopy[action.questionIdx]) {
        newTotal += action.points;
      } else {
        newTotal -= selectAnswerQuestionsCopy[action.questionIdx].points;
        newTotal += action.points;
      }
      selectAnswerQuestionsCopy[action.questionIdx] = {
        query: action.query,
        answer: action.answer,
        points: action.points,
      };

      cookie.set(
        "survey",
        {
          ...state,
          questions: selectAnswerQuestionsCopy,
          total: newTotal,
        },
        { expires: Date.now() + 3600000 }
      );

      return {
        ...state,
        questions: selectAnswerQuestionsCopy,
        total: newTotal,
      };
    default:
      throw new Error("action type not recognized");
  }
};
