import React from "react";

const FinishButton = ({ dispatch }) => {
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({ type: "finish" });
      }}
    >
      Finish
    </button>
  );
};

export default FinishButton;
