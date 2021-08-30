import React, { useState, useEffect } from 'react';
import userData from '../../../../database/userData/json/dummyUser1.json';
import { RiEmotionSadLine, RiEmotionHappyFill } from 'react-icons/ri';
import axios from 'axios';
import styled from 'styled-components';

const ManageAccount = () => {
  const [user, setUser] = useState(userData)
  const [currentMeal, setMeal] = useState(userData.currentMealPlan);


  useEffect(() => {
    // axios.get('/userdata')
    //   .then((res) => setMeal(res.data.currentMealPlan))
    //   .catch((err) => console.log('could not fetch meal plan', err));
  }, [])

  const cancelPlan = () => {
    setMeal('');

    // const cancel = {currentMealPlan: null};
    // axios.put(`${user.id}/currentmealplan`, cancel)
    //   .then((res) => console.log('Cancel successful', res.status))
    //   .catch((err) => console.log('Cancel failed', err))
  }

  console.log(userData);
  return(
    <ManageContainer>
      Current Meal Plan:
      <MealPlanContainer>
        <MealCard>
          {currentMeal ? <RiEmotionHappyFill /> : <RiEmotionSadLine />}
        </MealCard>
        <ButtonContainer>
          <button onClick={cancelPlan}>Cancel</button>
          <button>Modify</button>
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
  /* position: relative; */
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

