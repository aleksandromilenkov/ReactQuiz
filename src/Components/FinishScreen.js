import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const FinishScreen = () => {
  const { questions, points, highscore, dispatch } = useQuiz();
  const maximumPoints = questions.reduce((acc, val) => acc + val.points, 0);
  const percentage = (points / maximumPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 70 && percentage < 100) emoji = "😄";
  if (percentage >= 45 && percentage < 70) emoji = "🤔";
  if (percentage < 45) emoji = "🤦‍♂️";
  const storedHighscore =
    JSON.parse(localStorage.getItem("highscoreReactQuiz")) || 0;
  console.log(storedHighscore);
  if (storedHighscore < highscore) {
    JSON.stringify(localStorage.setItem("highscoreReactQuiz", highscore));
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maximumPoints} ({Math.ceil(percentage)}%){" "}
      </p>
      <p className="highscore">
        (Highscore:{" "}
        {JSON.parse(localStorage.getItem("highscoreReactQuiz")) || 0} points){" "}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
};

export default FinishScreen;
