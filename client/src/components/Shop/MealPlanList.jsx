import React from 'react';
import styled from 'styled-components';
import MealPlanCard from './MealPlanCard.jsx';

const PLANS = ['single', 'duo', 'family'];

const MealPlanList = ({ selectedMealPlan, setSelectedMealPlan }) => (
  <>
    <h2>Choose a Plan</h2>
    <StyledPlan>
      {PLANS.map((plan) => {
        return <MealPlanCard
          plan={plan}
          key={plan}
          selectable
          isCurrentlySelected={plan === selectedMealPlan.plan}
          setSelectedMealPlan={setSelectedMealPlan}
        />
      })}
    </StyledPlan>
  </>
);

const StyledPlan = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default MealPlanList;
