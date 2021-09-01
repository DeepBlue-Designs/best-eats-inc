import React, { useState } from "react";
import styled from "styled-components";

const GoalContainer = styled.div`
  border: 2px solid #9e9e9e;
  margin-top: 30px;
  width: 650px;
  padding: 20px;
  border-radius: 10px;
  margin-left: 70px;
`;

const GoalsList = () => {
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
  const [goalID, setGoalID] = useState(1);
  const [actions, setActions] = useState([
    { name: "SELECT THE GOAL FIRST", done: false },
  ]);
  const [progress, setProgress] = useState();

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
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <select onChange={handleChange} style={{ padding: "10px 30px" }}>
          <option>SELECT GOAL</option>
          {goalData.map((elm) => {
            return <option key={elm.id}>{elm.name}</option>;
          })}
        </select>

        <div className="allOptions" style={{ width: "200px" }}>
          {actions.map((elm, index) => (
            <div
              className="listOptions"
              style={{ marginTop: "10px" }}
              key={index}
            >
              <input
                type="checkbox"
                id={elm.name}
                name={elm.name}
                checked={elm.done}
                className="inputy"
                width="20px"
                height="20px"
                style={{ width: "20px", height: "20px" }}
                disabled
              ></input>
              <label
                style={{
                  fontSize: "1.3rem",
                  marginTop: "15px",
                  paddingLeft: "10px",
                }}
                htmlFor={elm.name}
              >
                {elm.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <span>
          {" "}
          {isNaN(Math.ceil(progress))
            ? "CHOOSE THE GOAL FIRST"
            : `Your Goal Progress:${Math.ceil(progress)} %`}{" "}
        </span>
        <progress
          style={{ width: "100%", height: "70px" }}
          value={progress}
          max="100"
        ></progress>
      </div>
    </GoalContainer>
  );
};

export default GoalsList;
// <li key={index}>{elm.name}</li>
// style={{ padding: "5px 20px" }}
