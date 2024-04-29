import React, { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

const Timer = () => {
  const { secondsRemaining, dispatch } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const calculatedSecondsRemaining = Math.floor(secondsRemaining % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "countdown" });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{calculatedSecondsRemaining < 10 && "0"}
      {calculatedSecondsRemaining}
    </div>
  );
};

export default Timer;
