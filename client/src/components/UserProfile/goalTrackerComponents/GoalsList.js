import React, { useState } from "react";
import styled from "styled-components";

const GoalContainer = styled.div`
  border: 2px solid red;
  margin-top: 30px;
  width: 650px;
`;

const GoalsList = () => {
  const [goalID, setGoalID] = useState(1);
  const [actions, setActions] = useState([]);
  const [progress, setProgress] = useState([]);
  var goalData = [
    {
      id: 1,
      name: "Lose weight",
      actions: [
        { name: "cut out white carbs", done: true },
        { name: "Cut out soda", done: false },
        { name: "cut out carbs", done: true },
      ],
    },
    {
      id: 2,
      name: "Healthy stuff",
      actions: [
        { name: "daily exercice", done: false },
        { name: "sleep 8 hours", done: false },
        { name: "other stuff", done: true },
      ],
    },
  ];

  const handleChange = (e) => {
    var t = e.target.value;
    console.log(t);
    var currentOptions = goalData.filter((elm) => elm.name === t);
    setActions(currentOptions[0].actions);

    var progressIndice = currentOptions[0].actions.filter(
      (elm) => elm.done === true
    );

    var pourcent =
      (progressIndice.length / currentOptions[0].actions.length) * 100;
    setProgress(pourcent);
  };

  return (
    <GoalContainer>
      <div
        id="selectGoal"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <select onChange={handleChange} style={{ padding: "5px 20px" }}>
          <option> SELECT GOAL</option>
          {goalData.map((elm) => {
            return <option key={elm.id}>{elm.name}</option>;
          })}
        </select>

        <div>
          {actions.map((elm, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={elm.name}
                name={elm.name}
                checked={elm.done}
                disabled
              ></input>
              <label htmlFor={elm.name}> {elm.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <progress
          style={{ width: "100%", height: "50px" }}
          value={progress}
          max="100"
        >
          {progress}
        </progress>
      </div>
    </GoalContainer>
  );
};

export default GoalsList;
// <li key={index}>{elm.name}</li>
