import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Progress = () => {
  const { questions, index, answer, points } = useQuiz();
  const maximumPoints = questions.reduce((acc, val) => acc + val.points, 0);
  return (
    <header className="progress">
      <progress
        max={questions.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {questions.length}{" "}
      </p>
      <p>
        <strong>
          {points}/{maximumPoints}
        </strong>
      </p>
    </header>
  );
};

export default Progress;
