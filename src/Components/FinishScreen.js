import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 70 && percentage < 100) emoji = "😄";
  if (percentage >= 45 && percentage < 70) emoji = "🤔";
  if (percentage < 45) emoji = "🤦‍♂️";
  if (JSON.parse(localStorage.getItem("highscoreReactQuiz"))) {
    const storedHighscore = JSON.parse(
      localStorage.getItem("highscoreReactQuiz")
    );
    if (storedHighscore < highscore) {
      JSON.stringify(localStorage.setItem("highscoreReactQuiz", highscore));
    }
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%){" "}
      </p>
      <p className="highscore">(Highscore: {highscore} points) </p>
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
