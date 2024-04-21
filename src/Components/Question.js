import React from "react";
import Options from "./Options";

const Question = ({ question, dispatch, index, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />

      <p>This question is: {question.points} points</p>
    </div>
  );
};

export default Question;
