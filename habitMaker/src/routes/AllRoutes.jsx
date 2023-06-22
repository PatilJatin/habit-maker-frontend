import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SignIn from "../pages/SignIN";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Goal from "../pages/Goal";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />

    </Routes>
  );
};

export default AllRoutes;
