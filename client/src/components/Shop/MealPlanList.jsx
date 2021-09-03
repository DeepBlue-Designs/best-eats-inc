import React from 'react';
import styled from 'styled-components';
import SelectMealPlanCard from './SelectMealPlanCard.jsx';

const PLANS = ['solo', 'duo', 'family'];

const MealPlanList = ({ selectedMealPlan, setSelectedMealPlan }) => (
  <section>
    <h2>Choose a Plan</h2>
    <StyledPlan>
      {PLANS.map((plan) => (
        <SelectMealPlanCard
          plan={plan}
          key={plan}
          isCurrentlySelected={plan === selectedMealPlan.plan}
          setSelectedMealPlan={setSelectedMealPlan}
          mealsPerWeek={selectedMealPlan ? selectedMealPlan.mealsPerWeek : 2}
        />
      ))}
    </StyledPlan>
  </section>
);

const StyledPlan = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #E4E4E4;
  padding-bottom: 20px;
`;

export default MealPlanList;
