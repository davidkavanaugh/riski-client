export const surveyInitialState = {
  questions: [],
};

export const surveyReducer = (state, action) => {
  switch (action.type) {
    case "addAnswer":
      let questionsCopyAddAnswer = [...state.questions];
      questionsCopyAddAnswer[action.index].answers.push(action.payload);
      return { ...state, questions: questionsCopyAddAnswer };
    case "addQuery":
      let questionsCopyAddQuery = [...state.questions];
      questionsCopyAddQuery.push({
        query: action.query,
        image: action.image,
        answers: [],
      });
      return {
        ...state,
        questions: questionsCopyAddQuery,
      };
    case "deleteAnswer":
      let questionsCopyDeleteAnswer = [...state.questions];
      let question = questionsCopyDeleteAnswer[action.questionIdx];
      question.answers = [
        ...question.answers.slice(0, action.answerIdx),
        ...question.answers.slice(action.answerIdx + 1),
      ];
      questionsCopyDeleteAnswer[action.questionIdx] = question;
      return {
        ...state,
        questions: questionsCopyDeleteAnswer,
      };
    case "deleteQuestion":
      let questionsArrDeleteQuestion = [
        ...state.questions.slice(0, action.index),
        ...state.questions.slice(action.index + 1),
      ];
      return {
        ...state,
        questions: questionsArrDeleteQuestion,
      };
    case "updateQuestion":
      const questionsArrUpdateQuestion = [...state.questions];
      const questionToUpdate = questionsArrUpdateQuestion[action.questionIndex];
      questionToUpdate.query = action.query;
      questionToUpdate.image = action.image;
      return {
        ...state,
        questions: questionsArrUpdateQuestion,
      };
    case "updateAnswer":
      const questionsArrUpdateAnswer = [...state.questions];
      const answerToUpdate =
        questionsArrUpdateAnswer[action.questionIndex].answers[
          action.answerIndex
        ];
      answerToUpdate.text = action.answer;
      answerToUpdate.points = action.points;
      return {
        ...state,
        questions: questionsArrUpdateAnswer,
      };
    default:
      throw new Error("action type not recognized");
  }
};
