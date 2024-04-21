import React, { useEffect, useState } from "react";

const Timer = ({ seconds, dispatch }) => {
  const mins = Math.floor(seconds / 60);
  const secondsRemaining = Math.floor(seconds % 60);
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
      {mins}:{secondsRemaining < 10 && "0"}
      {secondsRemaining}
    </div>
  );
};

export default Timer;
