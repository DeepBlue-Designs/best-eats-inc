import React, { useState } from 'react';
import MealPlanCard from './common/MealPlanCard.jsx';
import styled from 'styled-components';

const SelectMealPlanCard = ({ plan, mealsPerWeek, isCurrentlySelected, setSelectedMealPlan }) => {
  const [selectedMealsNum, setSelectedMealsNum] = useState(mealsPerWeek);

  const handleSelectChange = (e) => {
    setSelectedMealsNum(e.target.value);
    setSelectedMealPlan((prevState) => ({
      ...prevState,
      mealsPerWeek: Number(e.target.value),
    }));
  };

  const handleCardClick = () => {
    setSelectedMealPlan((prevState) => ({
      ...prevState,
      plan
    }));
  };

  return (
    <MealPlanCardContainer onClick={handleCardClick}>
      <MealPlanCard
        isCurrentlySelected={isCurrentlySelected}
        handleSelectChange={handleSelectChange}
        plan={plan}
        selectable
        mealsPerWeek={selectedMealsNum}
      />
    </MealPlanCardContainer>
  );
};

const MealPlanCardContainer = styled.div`
  margin: 10px;
  flex: 0 1 25%;
  height: 100%;
`;

export default SelectMealPlanCard;
