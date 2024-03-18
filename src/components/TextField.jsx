import React from "react";
import { useDispatch } from "react-redux";
import { questionActions } from "../store/questionSlice";

function TextField() {
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(questionActions.handleAmountChange(e.target.value));
  }

  return (
    <div>
      <div className="w-[40%] mx-auto flex flex-col items-start justify-center mt-4">
        <label
          htmlFor="questions"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Questions
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="number"
            name="questions"
            id="questions"
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
}

export default TextField;
