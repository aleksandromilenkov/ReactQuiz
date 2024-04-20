import React from "react";

const NextButton = ({ dispatch, answer }) => {
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
