import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MealCard from './common/MealCard.jsx';

const getMealById = (id) => axios.get(`${id}/meals`);

const DisplaySelections = ({ selectedMealPlan, setSelectedMealPlan }) => {
  const [mealsToDisplay, setMealsToDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    setMealsToDisplay([]);
    const allMeals = selectedMealPlan.mealIDs.map((id) => getMealById(id));
    Promise.all(allMeals)
      .then((res) => {
        res.map((data) => {
          const meal = data.data;
          setMealsToDisplay((prevState) => (
            [...prevState,
            meal]
          ))
        })
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Error retrieving your selected meals', err);
      })
  }, [selectedMealPlan]);


  const removeCard = (id) => {
    const idxToRemove = selectedMealPlan.mealIDs.indexOf(id);
    console.log('index to remove', idxToRemove, 'id', id)
    if (idxToRemove > -1) {
      const newMealIDs = [...selectedMealPlan.mealIDs];
      newMealIDs.splice(idxToRemove, 1);
      console.log(newMealIDs)
      setSelectedMealPlan((prevState) => ({
        ...prevState,
        mealIDs: newMealIDs,
      }))
    }
  }

  return (
    <Section>
      <h2>Your Selections for the Week</h2>
      {isLoading
      ? <p>Loading your selected meals</p>
      : null
      }
      {mealsToDisplay.length
      ? (
        <div>
          <div>
            <p>Your Current Plan Selection: {selectedMealPlan.plan}</p>
            <p>Your Selected Number of Meals Per Week: {selectedMealPlan.mealsPerWeek}</p>
          </div>
          <StyledDiv>
          {mealsToDisplay.map((meal) => (
            <MealCard
              id={meal.id}
              key={`${meal.id}selected`}
              image={meal.image}
              prepTime={meal.readyInMinutes}
              title={meal.title}
              isSelected
              isSelectable
              selectedMessage={'Already selected'}
              handleClick={removeCard}
            />
          ))}
          </StyledDiv>
        </div>
      )
      : <p>None so far. Time to make some selections!</p>
      }
    </Section>
  )
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  border-bottom: 1px solid #E4E4E4;
  padding-bottom: 20px;
`;
export default DisplaySelections;
