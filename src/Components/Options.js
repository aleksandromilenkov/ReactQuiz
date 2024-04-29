import React, { useReducer, useState } from "react";
import { reducer } from "../App";

const Options = ({ question, dispatch, answer }) => {
  const isAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          className={`btn btn-option ${idx === answer ? "answer" : ""} ${
            isAnswered
              ? idx === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          key={idx}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: idx });
            if (question.correctOption === idx) {
            }
          }}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
