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
  const [btnClicked, setBtnClicked] = useState('All Meals')

  const handleFilterClick = (e) => {
    const filterText = e.target.name.toLowerCase();
    setBtnClicked(e.target.name);
    const filteredMeals = meals.filter((meal) => meal.diets.some(diet => diet.includes(filterText)));
    setCurrentMeals(filteredMeals);
  };

  const resetMeals = () => {
    setCurrentMeals(initialMeals);
    setBtnClicked('All Meals');
  };

  const handleAddMoreClick = () => {
    // TODO: handle when no more meals remaining
    const newSlice = slicer + SLICE;
    setCurrentMeals(meals.slice(STARTING_IDX, STARTING_IDX + newSlice));
    setSlicer(newSlice);
  }

  return (
    <section>
    <FilterDiv>
      <FilterButton
        name="All Meals"
        onClick={resetMeals}
        clicked={btnClicked === 'All Meals'}
      >
        All Meals
      </FilterButton>
      {DIETS.map((diet) => (
        <FilterButton
          key={diet}
          name={diet}
          type="button"
          onClick={handleFilterClick}
          clicked={btnClicked === diet}
        >
          {diet}
        </FilterButton>)
      )}
      </FilterDiv>
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
      <ShowMore>
        <button type="button" onClick={handleAddMoreClick}>Show More Meals</button>
      </ShowMore>
    </section>
  );
};

const MealsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-flow: row wrap;
  justify-content: center;
  max-height: 100vh;
  overflow-y: auto;
`;

const FilterButton = styled.button`
  border-radius: 30px;
  padding: 8px;
  margin: 10px;
  border: none;
  transition: background-color .3s;
  background-color: ${props => props.clicked ? '#FFEF9C' : '#B5FAFF'};
  &:hover {
    background-color: #FFE97A;
    cursor: pointer;
    transition: background-color .3s;
  }
`;

const FilterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ShowMore = styled.div`
  display:flex;
  justify-content: center;
  margin: 20px 0;
`;

export default MealList;
