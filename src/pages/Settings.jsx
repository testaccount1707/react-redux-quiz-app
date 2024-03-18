import React from "react";
import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

function Settings() {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  // console.log(response);
  const navigate = useNavigate();

  if (loading) {
    return (
      <button
        type="button"
        className="bg-slate-500 text-white p-4 rounded-xl"
        disabled
      >
        Processing...
      </button>
    );
  }

  if (error) {
    return (
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Holy smokes!</strong>
        <span class="block sm:inline">Something seriously bad happened.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/questions");
  }

  // console.log(response.trivia_categories);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" />

        {/* number input  */}
        <TextField />
        {/* submit button  */}
        <button
          type="submit"
          className="bg-stone-500 mt-4 w-[40%] hover:bg-stone-700 text-white font-bold py-2 px-4 border border-stone-700 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Settings;
