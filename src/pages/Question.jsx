import React, { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { questionActions } from "../store/questionSlice";

function genRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Question() {
  const {
    questionCategory,
    questionDifficulty,
    questionType,
    amount_of_questions,
    score,
  } = useSelector((state) => state);

  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  // console.log(questionCategory, questionDifficulty);

  let apiurl = `/api.php?amount=${amount_of_questions}`;

  if (questionCategory) {
    apiurl = apiurl.concat(`&category=${questionCategory}`);
  }
  if (questionDifficulty) {
    apiurl = apiurl.concat(`&difficulty=${questionDifficulty}`);
  }
  if (questionType) {
    apiurl = apiurl.concat(`&type=${questionType}`);
  }

  const { response, loading } = useAxios({ url: apiurl });

  // console.log(genRandomInt(3));
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      const answers = [...question.incorrect_answers];
      answers.splice(
        genRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  // console.log(options);

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

  function handleButtonClick(e) {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(questionActions.handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  }

  console.log(response);

  return (
    <div>
      <h2 className="mt-4 mb-4 font-bold font-mono text-stone-600">
        Question {+questionIndex + 1}
      </h2>
      <h4 className="mt-4 mb-4 font-bold text-stone-800">
        {response.results[questionIndex].question}
      </h4>
      <div className="flex flex-col justify-center items-center">
        {options.map((data, id) => {
          return (
            <button
              key={id}
              onClick={handleButtonClick}
              className="bg-stone-500 w-[60%] shadow-md mt-4 hover:bg-stone-700 text-white font-bold py-2 px-4 mx-4 rounded"
            >
              {data}
            </button>
          );
        })}
      </div>
      <h4 className="mt-4 mb-4 font-bold font-mono text-stone-600">
        Score: {score} / {response.results.length}
      </h4>
    </div>
  );
}

export default Question;
