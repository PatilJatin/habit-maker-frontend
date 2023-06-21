import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SignIn from "../pages/SignIN";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default AllRoutes;
