import React from 'react';
import styled from 'styled-components';
import SelectMealPlanCard from './SelectMealPlanCard.jsx';

const PLANS = ['single', 'duo', 'family'];

const MealPlanList = ({ selectedMealPlan, setSelectedMealPlan }) => (
  <>
    <h2>Choose a Plan</h2>
    <StyledPlan>
      {PLANS.map((plan) => (
        <SelectMealPlanCard
          plan={plan}
          key={plan}
          isCurrentlySelected={plan === selectedMealPlan.plan}
          setSelectedMealPlan={setSelectedMealPlan}
        />
      ))}
    </StyledPlan>
  </>
);

const StyledPlan = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default MealPlanList;
