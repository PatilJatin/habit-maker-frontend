import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SignIn from "../pages/SignIN";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

import Goal from "../pages/Goal";
import GoalForm from "../components/GoalForm";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/goal/:id" element={<Goal />} />
      <Route exact path="/goal/form" element={<GoalForm />} />
    </Routes>
  );
};

export default AllRoutes;
