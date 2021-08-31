import React from 'react';
import styled from 'styled-components';

const MealSizeCard = ({ size }) => (
  <StyledCard>
    <h3>Plan: {size}</h3>
    <select>
    {[...Array(5)].map((el, index) => <option key={`meal${index}`}value={Number(index) + 2}>{Number(index) + 2}</option>)}
    </select>
  </StyledCard>
);

const StyledCard = styled.div`
  border: 1px solid black;
`;

export default MealSizeCard;
