import React, { useState } from 'react';
import styled from 'styled-components';
import SelectMealCard from './SelectMealCard.jsx';

const DIETS = ['Gluten Free', 'Vegetarian', 'Vegan', 'Pescatarian', 'Paleo'];
const STARTING_IDX = 55;
const SLICE = 9;

const MealList = ({ meals, selectedMealPlan, setSelectedMealPlan }) => {
  const initialMeals = meals.slice(STARTING_IDX, STARTING_IDX + SLICE);
  const [currentMeals, setCurrentMeals] = useState(initialMeals);
  const [slicer, setSlicer] = useState(SLICE);

  const handleFilterClick = (e) => {
    const filterText = e.target.name.toLowerCase();
    const filteredMeals = meals.filter((meal) => meal.diets.some(diet => diet.includes(filterText)));
    setCurrentMeals(filteredMeals);
  };

  const resetMeals = () => {
    setCurrentMeals(initialMeals);
  };

  const handleAddMoreClick = () => {
    // TODO: handle when no more meals remaining
    const newSlice = slicer + SLICE;
    setCurrentMeals(meals.slice(STARTING_IDX, STARTING_IDX + newSlice));
    setSlicer(newSlice);
  }

  return (
    <Section>
      <button onClick={resetMeals}>All Meals</button>
      {DIETS.map((diet) => (
        <button
          key={diet}
          name={diet}
          type="button"
          onClick={handleFilterClick}
        >
          {diet}
        </button>)
      )}
      <MealsContainer>
        {currentMeals.map((meal) => (
          <SelectMealCard
            key={meal.id}
            id={meal.id}
            title={meal.title}
            image={meal.image}
            prepTime={meal.readyInMinutes}
            selectedMealPlan={selectedMealPlan}
            setSelectedMealPlan={setSelectedMealPlan}
            isSelected={selectedMealPlan.mealIDs.includes(meal.id)}
          />
        ))}
      </MealsContainer>
      <div>
        <button type="button" onClick={handleAddMoreClick}>Show More Meals</button>
      </div>
    </Section>
  );
};

const MealsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-flow: row wrap;
  max-height: 100vh;
  overflow-y: auto;
`;

const Section = styled.section`
  padding-left: 12.5%;
  padding-right: 12.5%;
  margin: 0 auto;
`;

export default MealList;
