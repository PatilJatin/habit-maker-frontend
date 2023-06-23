import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIN";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import GoalForm from "../components/GoalForm";
import Goal from "../pages/Goal";
import GoalForm from "../components/GoalForm";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          // <PrivateRoute>
          <Home />
          // </PrivateRoute>
        }
      />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route
        path="/goal/:id"
        element={
          // <PrivateRoute>
            <Goal />
          // </PrivateRoute>
        }
      />
      <Route
        path="/goal/form"
        element={
          // <PrivateRoute>
            <GoalForm />
          // </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
