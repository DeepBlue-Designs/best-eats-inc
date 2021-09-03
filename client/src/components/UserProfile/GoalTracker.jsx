import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Header from "./goalTrackerComponents/Header.jsx";

import App from "./goalTrackerComponents/App.jsx";

const GoalButton = styled.a`
  display: inline-block;
  background: #01ccff;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: black;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  // z-index: 1;
  cursor: pointer;
`;

const GoalTracker = () => {
  const [goalMoadal, setGoalModal] = useState(false);
  const clickOnGoal = () => {
    setGoalModal(!goalMoadal);
  };
  return (
    <div style={{ margin: "auto" }}>
      <GoalButton onClick={clickOnGoal}>Goal Tracker</GoalButton>

      <Modal isOpen={goalMoadal} onRequestClose={() => setGoalModal(false)}>
        <span
          style={{ cursor: "pointer", color: "red", fontSize: ".9rem" }}
          onClick={clickOnGoal}
        >
          [X] CLOSE
        </span>
        <Header />
        <App />
      </Modal>
    </div>
  );
};

export default GoalTracker;
