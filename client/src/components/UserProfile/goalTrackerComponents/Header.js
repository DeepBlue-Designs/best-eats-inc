import React from "react";
import styled from "styled-components";

const AddGoal = styled.a`
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
  cursor: pointer;
  margin-top: 15px;
`;

const Header = () => {
  return (
    <div>
      <AddGoal>ADD NEW GOAL</AddGoal>
    </div>
  );
};

export default Header;
