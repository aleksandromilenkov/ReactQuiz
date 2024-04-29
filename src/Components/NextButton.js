import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const NextButton = () => {
  const { dispatch, answer } = useQuiz();
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({ type: "nextQuestion" });
      }}
    >
      NextButton
    </button>
  );
};

export default NextButton;
