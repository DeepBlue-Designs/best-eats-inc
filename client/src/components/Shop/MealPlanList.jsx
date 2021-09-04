import React from 'react';
import styled from 'styled-components';
import SelectMealPlanCard from './SelectMealPlanCard.jsx';

const PLANS = ['solo', 'duo', 'family'];

const MealPlanList = ({ selectedMealPlan, setSelectedMealPlan }) => (
  <section>
    <h2>Choose a Plan</h2>
    <PlanContainer>
      {PLANS.map((plan) => (
        <SelectMealPlanCard
          plan={plan}
          key={plan}
          isCurrentlySelected={plan === selectedMealPlan.plan}
          setSelectedMealPlan={setSelectedMealPlan}
          mealsPerWeek={selectedMealPlan ? selectedMealPlan.mealsPerWeek : 2}
        />
      ))}
    </PlanContainer>
  </section>
);

const PlanContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-flow: row wrap;
  justify-content: center;
`;

export default MealPlanList;
