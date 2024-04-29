import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const FinishButton = () => {
  const { dispatch } = useQuiz();
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({ type: "finish" });
      }}
    >
      Finish
    </button>
  );
};

export default FinishButton;
