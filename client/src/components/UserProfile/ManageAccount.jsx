import React, { useState, useEffect, useContext } from 'react';
// import userData from '../../../../database/userData/json/dummyUser1.json';
import Context from '../Context.jsx';
import { Link } from 'react-router-dom';
import { RiEmotionSadLine, RiEmotionHappyFill } from 'react-icons/ri';
import MealPlanCard from '../Shop/common/MealPlanCard.jsx'
import styled from 'styled-components';
import axios from 'axios';

const ManageAccount = () => {
  const { userData } = useContext(Context)
  const [currentMeal, setMeal] = useState(userData.currentMealPlan);

  useEffect(() => {
    // console.log('user', userData)
    // axios.get('/login')
    //   .then((res) => {
    //     if (res.data.currentMealplan) {
    //       setMeal(res.data.currentMealPlan)
    //     }
    //   })
    //   .catch((err) => console.log('could not fetch meal plan', err));
  }, [])

  const cancelPlan = () => {
    setMeal(null);
    const cancel = {currentMealPlan: null};
    axios.put(`user/${userData._id}/currentmealplan/remove`, cancel)
      .then((res) => console.log('Cancel successful', res.status))
      .catch((err) => console.log('Cancel failed', err))
  }
  console.log('current', currentMeal.plan)
  return(
    <ManageContainer>
      Current Meal Plan:
      <MealPlanContainer>
        <MealCard>
        {currentMeal.mealIDs.length ? <MealPlanCard plan={currentMeal.plan} mealsPerWeek={currentMeal.mealsPerWeek} /> : "Please Select a MealPlan" }
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

