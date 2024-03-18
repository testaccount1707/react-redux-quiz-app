import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Settings from "./pages/Settings.jsx";
import Question from "./pages/Question.jsx";
import FinalScore from "./pages/FinalScore.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="" element={<Settings />} />
      <Route path="/questions" element={<Question />} />
      <Route path="/score" element={<FinalScore />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
