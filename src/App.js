import React, { useEffect, useReducer, useState } from "react";
import DateCounter from "./DateCounter";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { type } from "@testing-library/user-event/dist/type";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import StartScreen from "./Components/StartScreen";
import Question from "./Components/Question";
import NextButton from "./Components/NextButton";
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataLoading":
      return {
        ...state,
        status: "loading",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "prevQuestion":
      return {
        ...state,
        index: state.index - 1,
      };
    case "newAnswer":
      const currentQuestion = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      };

    default:
      throw new Error("Unknown action");
  }
};

const App = () => {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    dispatch({ type: "dataLoading" });
    fetch("http://localhost:8000/questions")
      .then((data) => data.json())
      .then((questions) => {
        dispatch({ type: "dataReceived", payload: questions });
      })
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questionsNumber={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Question
              question={questions.at(index)}
              dispatch={dispatch}
              index={index}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
};

export default App;
