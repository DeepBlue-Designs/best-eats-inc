import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GoalsList from "./GoalsList.jsx";
import AddGoal from "./AddGoal.jsx";
import ListGoals from "./ListGoals.jsx";

const App = () => {
  const [allData, setAllData] = useState();

  useEffect(() => {
    getAllGoals();
  }, [allData]);

  const getAllGoals = () => {
    fetch("http://127.0.0.1:4000/goals")
      .then((res) => res.json())
      .then((result) => setAllData(result))
      .catch(console.log);
  };

  const refresh = () => {
    getAllGoals();
  };

  return (
    <div>
      <GoalsList allUserGoals={allData} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1200px",
          margin: "auto",
        }}
        className="goalclass"
      >
        <AddGoal />
        <ListGoals allUserGoals={allData} refresh={refresh} />
      </div>
    </div>
  );
};

export default App;
