import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const API = "http://localhost:3000/api/v1";

export const goalContext = createContext();

const token = localStorage.getItem("token");

const getAllGoals = async () => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  let res = await axios.get(`${API}/get/allgoal`, config);
  return res.data;
};

const GoalContextProvider = ({ children }) => {
  const [allgoal, setAllGoals] = useState([]);

  useEffect(() => {
    getAllGoals()
      .then((res) => setAllGoals(res.allGoals))
      .catch((err) => console.log(err));
  }, []);

  const createGoal = async (data) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    let res = await axios.post(`${API}/create/task`, data, config);
    return res.data;
  };

  return (
    <goalContext.Provider value={(allgoal, createGoal)} >
      {children}
    </goalContext.Provider>
  );
};

export default GoalContextProvider;
