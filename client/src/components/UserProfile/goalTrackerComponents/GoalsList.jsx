import React, { useState, useEffect } from "react";
import styled from "styled-components";
import userdata from "../../../../../database/userData/json/dummyUser1.json";

const GoalContainer = styled.div`
  border: 2px solid #9e9e9e;
  margin-top: 30px;
  width: 650px;
  padding: 20px;
  border-radius: 10px;
  margin: auto;
`;

const GoalsList = (props) => {
  const [goalID, setGoalID] = useState(1);
  const [actions, setActions] = useState([
    { name: "SELECT THE GOAL FIRST", completed: false },
  ]);
  const [progress, setProgress] = useState();

  function handleChange(e) {
    var t = e.target.value;
    var currentOptions = props.allUserGoals.filter((elm) => elm.name === t);
    setActions(currentOptions[0].actionItems);

    var progressIndice = currentOptions[0].actionItems.filter(
      (elm) => elm.completed === true
    );

    var pourcent =
      (progressIndice.length / currentOptions[0].actionItems.length) * 100;
    setProgress(pourcent);
  }

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
          {props.allUserGoals === undefined
            ? "Waiting ...."
            : props.allUserGoals.map((elm) => {
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
                checked={elm.completed}
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
      <h1 onClick={() => console.log(props.allUserGoals)}>
        TEST .... CAN YOU SEE ALL DATA
        {
          (console.log("----------->"),
          console.log(Array.isArray(props.allUserGoals)),
          console.log("----------->"))
        }
      </h1>
    </GoalContainer>
  );
};

export default GoalsList;
// <li key={index}>{elm.name}</li>
// style={{ padding: "5px 20px" }}
// {console.log(allData.goals)}
