import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionCategory: "",
  questionDifficulty: "",
  questionType: "",
  amount_of_questions: 10,
  score: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    handleCategoryChange(state, action) {
      console.log(action.payload);
      return {
        ...state,
        questionCategory: +action.payload,
      };
    },
    handleDifficultyChange(state, action) {
      return {
        ...state,
        questionDifficulty: action.payload,
      };
    },
    handleTypeChange(state, action) {
      return {
        ...state,
        questionType: action.payload,
      };
    },
    handleAmountChange(state, action) {
      return {
        ...state,
        amount_of_questions: action.payload,
      };
    },
    handleScoreChange(state, action) {
      return {
        ...state,
        score: action.payload,
      };
    },
  },
});

export const questionActions = questionSlice.actions;

export default questionSlice;
