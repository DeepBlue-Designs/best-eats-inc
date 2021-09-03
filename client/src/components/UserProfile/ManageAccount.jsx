import React, { useState, useContext } from 'react';
import Context from '../Context.jsx';
import { Link } from 'react-router-dom';
import MealPlanCard from '../Shop/common/MealPlanCard.jsx'
import styled from 'styled-components';
import axios from 'axios';

const ManageAccount = () => {
  const { userData, setUserData } = useContext(Context)
  const [currentMeal, setMeal] = useState(userData.currentMealPlan);


  const cancelPlan = () => {
    setMeal(null);
    axios.put(`user/${userData._id}/mealplan/remove`)
      .then((res) => console.log('Cancel successful', setUserData(res.data)))
      .catch((err) => console.log('Cancel failed', err))
  }

  return(
    <ManageContainer>
      Current Meal Plan:
      <MealPlanContainer>
        <MealCard>
        {currentMeal && currentMeal.mealIDs.length ? <MealPlanCard plan={currentMeal.plan} mealsPerWeek={currentMeal.mealsPerWeek} /> : "Please Select a MealPlan" }
        </MealCard>
        <ButtonContainer>
          <button onClick={cancelPlan}>Cancel</button>
            <Link to="/shop">
              <button>Modify</button>
            </Link>
        </ButtonContainer>
      </MealPlanContainer>
    </ManageContainer>
  )
};

export default ManageAccount;

const ManageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
  `

const MealPlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid orange;
  height: 500px;
  justify-content: space-between;
  max-width: 100%; `

const MealCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
  height: 75%;
  max-width: 30%;
  min-width: 30%;
  border: 1px solid blue;`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  margin: 2%;
  height: 75%;
  max-width: 30%;
  min-width: 30%;
  border: 1px solid purple;
`

