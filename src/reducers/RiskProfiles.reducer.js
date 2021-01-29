const db = [
  {
    minScore: 20.1,
    maxScore: 40,
    title: "Conservative",
    description:
      "Your primary investment goal is focused on maintaining a lower level of risk and more consistency in portfolio returns, but with a willingness to take on a reasonable level of volatility to increase your chances of earning higher long-term rates of return.",
  },
  {
    minScore: 1,
    maxScore: 20,
    title: "Income",
    description:
      "Your primary investment goal is to focus on minimizing risk, preserving capital, and generating a more consistent return stream while balancing the need for some minimal level of long-term principal growth",
  },
  {
    minScore: 40.1,
    maxScore: 60,
    title: "Moderate",
    description:
      "Your primary investment goal is to focus on long-term growth of principal but within the context of moderating overall levels of risk through allocation of portfolio assets in a balanced manner",
  },
  {
    minScore: 60.1,
    maxScore: 80,
    title: "Growth",
    description:
      "Your primary investment goal is to focus on long-term growth of principal with only minimal concern for fixed income diversification and volatility minimization",
  },
  {
    minScore: 80.1,
    maxScore: 100,
    title: "Aggressive",
    description:
      "Your primary investment goal is to focus on long-term growth of principal with little concern for current income needs or volatility reduction",
  },
];

export const riskProfilesInitialState = {
  allRiskProfiles: [],
  riskProfile: {
    minScore: "",
    maxScore: "",
    title: "",
    description: "",
  },
};

export const riskProfilesReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        riskProfile: {
          minScore: "",
          maxScore: "",
          title: "",
          description: "",
        },
      };
    case "GET_findAllRiskProfiles":
      const allRiskProfilesSorted = [...db].sort((a, b) => {
        return a.minScore - b.minScore;
      });
      return {
        ...state,
        allRiskProfiles: allRiskProfilesSorted,
      };
    case "GET_findRiskProfile":
      return {
        ...state,
        riskProfile: state.allRiskProfiles[action.index],
      };

    case "DELETE_deleteRiskProfile":
      const allRiskProfilesCopyDelete = state.allRiskProfiles
        .filter((riskProfile, idx) => idx !== action.index)
        .sort((a, b) => {
          return a.minScore - b.minScore;
        });
      return {
        ...state,
        allRiskProfiles: allRiskProfilesCopyDelete,
      };

    case `PATCH_${action.property}`:
      const riskProfileCopyPatch = { ...state.riskProfile };
      riskProfileCopyPatch[action.property] = action.payload;
      return {
        ...state,
        riskProfile: riskProfileCopyPatch,
      };
    case "POST_createRiskProfile":
      let allRiskProfilesCopyPost = [...state.allRiskProfiles];
      allRiskProfilesCopyPost.push(state.riskProfile);
      allRiskProfilesCopyPost = allRiskProfilesCopyPost.sort((a, b) => {
        return a.minScore - b.minScore;
      });
      return {
        ...state,
        allRiskProfiles: allRiskProfilesCopyPost,
      };
    case "PUT_updateRiskProfile":
      const allRiskProfilesCopyPut = [...state.allRiskProfiles];
      allRiskProfilesCopyPut[action.index] = state.riskProfile;
      allRiskProfilesCopyPut.sort((a, b) => {
        return a.minScore - b.minScore;
      });
      return {
        ...state,
        allRiskProfiles: allRiskProfilesCopyPut,
      };
    default:
      throw new Error("action type not recognized");
  }
};
