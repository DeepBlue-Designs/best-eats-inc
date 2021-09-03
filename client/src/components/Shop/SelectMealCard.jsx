import React from 'react';
import MealCard from './common/MealCard.jsx';

const SelectMealCard = ({ id, title, image, prepTime, selectedMealPlan, setSelectedMealPlan, isSelected }) => {

  const handleAddOrRemoveClick = () => {
    const isMealSelected = selectedMealPlan.mealIDs.indexOf(id) > -1;
    if (!isMealSelected) {
      if (selectedMealPlan.mealIDs.length < selectedMealPlan.mealsPerWeek) {
        setSelectedMealPlan((prevState) => ({
          ...prevState,
          mealIDs: [...prevState.mealIDs, id],
        }))
      }
    } else {
      const idxToRemove = selectedMealPlan.mealIDs.indexOf(id);
      if (idxToRemove > -1) {
        const newMealIDs = [...selectedMealPlan.mealIDs];
        newMealIDs.splice(idxToRemove, 1);
        setSelectedMealPlan((prevState) => ({
          ...prevState,
          mealIDs: newMealIDs,
        }))
      }
    }
  }

  return (
    <MealCard
      id={id}
      key={id}
      image={image}
      prepTime={prepTime}
      title={title}
      isSelected={isSelected}
      isSelectable
      selectedMessage={'Add Meal'}
      handleClick={handleAddOrRemoveClick}
    />
  );
};

export default SelectMealCard;
