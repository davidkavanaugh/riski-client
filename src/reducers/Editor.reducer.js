import chart from "../images/chart.png";

export const editorInitialState = {
  questions: [
    {
      query: "What is your current age?",
      answers: [
        {
          text: "Less than 30",
          points: 10,
        },
        {
          text: "31 to 45",
          points: 7.5,
        },
        {
          text: "46 to 60",
          points: 5,
        },
        {
          text: "61 to 75",
          points: 2.5,
        },
        {
          text: "76 or older",
          points: 0.1,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query:
        "What percent of your total investable assets will be allocated to this portfolio",
      answers: [
        {
          text: "0% - 20%",
          points: 10,
        },
        {
          text: "21% - 40%",
          points: 7.5,
        },
        {
          text: "41% - 60%",
          points: 5,
        },
        {
          text: "61% - 80%",
          points: 2.5,
        },
        {
          text: "81% - 100%",
          points: 0.1,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query:
        "In how many years to you plan on taking withdrawals from your portfolio",
      answers: [
        {
          text: "Two years or less",
          points: 0.1,
        },
        {
          text: "3 - 7 years",
          points: 2.5,
        },
        {
          text: "8 - 12 years",
          points: 5,
        },
        {
          text: "13 - 20 years",
          points: 7.5,
        },
        {
          text: "20+ years",
          points: 10,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query:
        "My current and future income sources (i.e. salary, social security, and pension) are:",
      answers: [
        {
          text: "Very Unstable",
          points: 0.1,
        },
        {
          text: "Unstable",
          points: 2.5,
        },
        {
          text: "Somewhat Stable",
          points: 5,
        },
        {
          text: "Stable",
          points: 7.5,
        },
        {
          text: "Very Stable",
          points: 10,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query:
        "Please describe the riskiest security type that you have had some investment experience and/or would be comfortable with using in a portfolio.",
      answers: [
        {
          text: "U.S. Government Securities, Certificates of Deposit",
          points: 0.1,
        },
        {
          text:
            "U.S. Government Securities, Certificates of Deposit, Municipal & Corporate Bonds",
          points: 2.5,
        },
        {
          text:
            "U.S. Government Securities, Certificates of Deposit, Municipal & Corporate Bonds, Large Company Stocks",
          points: 5,
        },
        {
          text:
            "U.S. Government Securities, Certificates of Deposit, Municipal & Corporate Bonds, Large Company Stocks, Small & Medium Company Stocks",
          points: 7.5,
        },
        {
          text:
            "U.S. Government Securities, Certificates of Deposit, Municipal & Corporate Bonds, Large Company Stocks, Small & Medium Company Stocks, Specialty Investments such as Real Estate, Foreign Stocks, and Commodities",
          points: 10,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query:
        "Generally, I prefer investments with little or no fluctuation in value, and I'm willing to accept the lower return associated with these investments.",
      answers: [
        {
          text: "Strongly Disagree",
          points: 10,
        },
        {
          text: "Disagree",
          points: 7.5,
        },
        {
          text: "Somewhat Agree",
          points: 5,
        },
        {
          text: "Agree",
          points: 2.5,
        },
        {
          text: "Strongly Agree",
          points: 0.1,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query:
        "Investments can go up and down in value and experts often say you should be prepared to weather a downturn. By how much could the total value of your investments go down before you would begin to feel uncomfortable?",
      answers: [
        {
          text: "Any fall in value would make me uncomfortable",
          points: 0.1,
        },
        {
          text: "10%",
          points: 2.5,
        },
        {
          text: "20%",
          points: 5,
        },
        {
          text: "30%",
          points: 7.5,
        },
        {
          text: "More than 30%",
          points: 10,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query: "When you invest money, what is your primary goal?",
      answers: [
        {
          text:
            "Preserve the value of my investments. I want to minimize the risk of my investments losing value.",
          points: 0.1,
        },
        {
          text:
            "Emphasize Current Income. My investments should be relatively safe",
          points: 2.5,
        },
        {
          text:
            "Generate current income but also build principal gradually over time. I am willing to expose my investments to a reasonable level of risk",
          points: 5,
        },
        {
          text:
            "Have the value of my investment grow over time with less emphasis on producing income. I am willing to expose my investments to some additional risk to attain my long-term goals.",
          points: 7.5,
        },
        {
          text:
            "Have the value of my investments grow substantially over time. I do not need current income and am willing to expose my investment to the higher levels of risk needed to attain my long-term goals.",
          points: 10,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query:
        "You understand the value of investments will fluctuate over time depending on the amount of risk taken. What is the approximate loss in any one-year period that you would be willing to accept before deciding to change your investment?",
      answers: [
        {
          text: "Minimal Loss",
          points: 0.1,
        },
        {
          text: "Down 5% - 10%",
          points: 2.5,
        },
        {
          text: "Down 10% - 15%",
          points: 5,
        },
        {
          text: "Down 15% - 25%",
          points: 7.5,
        },
        {
          text: "Down 25% or more",
          points: 10,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query:
        "The following table shows the ending value of $100,000 invested in five hypothetical portfolios over a three year period. The returns for these portfolios may fall anywhere within these ranges. Which of the five hypothetical portfolios would you most feel comfortable in accepting?",
      answers: [
        {
          text: "Portfolio A",
          points: 0.1,
        },
        {
          text: "Portfolio B",
          points: 2.5,
        },
        {
          text: "Portfolio C",
          points: 5,
        },
        {
          text: "Portfolio D",
          points: 7.5,
        },
        {
          text: "Portfolio E",
          points: 10,
        },
      ],
      image: {
        file: undefined,
        url: chart,
      },
    },
  ],
};

export const editorReducer = (state, action) => {
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
