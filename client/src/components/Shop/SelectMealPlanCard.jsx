import React, { useState } from 'react';
import styled from 'styled-components';
import MealPlanCard from './common/MealPlanCard.jsx';

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
    <div onClick={handleCardClick}>
      <MealPlanCard
        isCurrentlySelected={isCurrentlySelected}
        handleSelectChange={handleSelectChange}
        plan={plan}
        selectable
        mealsPerWeek={selectedMealsNum}
      />
    </div>
  );
};

export default SelectMealPlanCard;
