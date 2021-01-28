export const surveyInitialState = {
  questions: [
    {
      query: "Why did the chicken cross the road?",
      answers: [
        {
          text: "to get to the other side",
          points: 2,
        },
        {
          text: "because he felt like it",
          points: 5,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
    {
      query: "Why is the sky blue",
      answers: [
        {
          text: "Who cares",
          points: 2,
        },
        {
          text: "aaack",
          points: 10,
        },
      ],
      image: {
        file: undefined,
        url:
          "https://inteng-storage.s3.amazonaws.com/images/import/2016/09/BLUE-SKY.jpg",
      },
    },
    {
      query: "What is your name?",
      answers: [
        {
          text: "that's not an option",
          points: 2,
        },
        {
          text: "how many finger do you have?",
          points: 5,
        },
      ],
      image: {
        file: undefined,
        url: "",
      },
    },
  ],
};

export const surveyReducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error("action type not recognized");
  }
};
