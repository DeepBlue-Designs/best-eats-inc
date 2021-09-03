import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GoalsList from "./GoalsList.jsx";
import AddGoal from "./AddGoal.jsx";
import ListGoals from "./ListGoals.jsx";

const App = () => {
  const [allData, setAllData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:4000/goals")
      .then((res) => res.json())
      .then((result) => setAllData(result))
      .catch(console.log);
  }, [allData]);

  return (
    <div>
      <GoalsList allUserGoals={allData} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1300px",
          marginTop: "40px",
        }}
        className="goalclass"
      >
        <AddGoal />
        <ListGoals allUserGoals={allData} />
      </div>
    </div>
  );
};

export default App;
