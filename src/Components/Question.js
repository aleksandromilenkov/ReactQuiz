import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

const Question = () => {
  const { questions, index, answer, dispatch } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />

      <p>This question is: {question.points} points</p>
    </div>
  );
};

export default Question;
