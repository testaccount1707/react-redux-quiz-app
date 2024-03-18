import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { questionActions } from "../store/questionSlice";

function FinalScore() {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state);
  const navigate = useNavigate();

  function handleSubmit() {
    dispatch(questionActions.handleScoreChange(0));
    dispatch(questionActions.handleAmountChange(10));
    navigate("/");
  }

  return (
    <div>
      <h2 className="mt-4 text-xl mb-4 font-bold font-mono text-stone-600">
        Final Score {score}
      </h2>
      <button
        onClick={handleSubmit}
        className="bg-stone-500 w-[60%] shadow-md mt-4 hover:bg-stone-700 text-white font-bold py-2 px-4 mx-4 rounded"
      >
        Back to settings
      </button>
    </div>
  );
}

export default FinalScore;
