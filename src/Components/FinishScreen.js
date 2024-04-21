import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 70 && percentage < 100) emoji = "😄";
  if (percentage >= 45 && percentage < 70) emoji = "🤔";
  if (percentage < 45) emoji = "🤦‍♂️";
  const storedHighscore =
    JSON.parse(localStorage.getItem("highscoreReactQuiz")) || 0;
  console.log(storedHighscore);
  if (storedHighscore < highscore) {
    console.log("first");
    JSON.stringify(localStorage.setItem("highscoreReactQuiz", highscore));
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%){" "}
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
