import React from 'react';
import styled from 'styled-components';
import MealSizeCard from './MealSizeCard.jsx';

const SIZES = ['single', 'duo', 'family'];

const MealPlan = () => (
  <StyledPlan>
    {SIZES.map((size) => (
      <MealSizeCard size={size} key={size} />
    ))}
  </StyledPlan>
);

const StyledPlan = styled.div`
  display: flex;
`;


export default MealPlan;
