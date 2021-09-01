import React from "react";
import styled from "styled-components";

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
  z-index: 1;
  cursor: pointer;
`;

const GoalTracker = () => {
  return (
    <div style={{ margin: "auto" }}>
      <GoalButton>Goal Tracker</GoalButton>
    </div>
  );
};

export default GoalTracker;
