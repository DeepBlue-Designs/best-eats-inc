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
      <Text>
      Current Meal Plan:
      </Text>
      <MealPlanContainer>
        <MealCard>
        {currentMeal && currentMeal.mealIDs.length ? <MealPlanCard plan={currentMeal.plan} mealsPerWeek={currentMeal.mealsPerWeek} style={{'background-color': '#BAFFAE'}}/> : "Please Select a MealPlan" }
        </MealCard>
        <ButtonContainer>
          <button onClick={cancelPlan}
          style={{'border': '5px solid #baffae', 'padding':'14px 57px', 'background-color': 'white', 'width': 'fit-content'}}>Cancel</button>
            <Link to="/shop">
              <button style={{'border': '5px solid #BAFFAE', 'padding': '14px 57px', 'background-color': 'white'}}>Modify</button>
            </Link>
        </ButtonContainer>
      </MealPlanContainer>
    </ManageContainer>
  )
};

export default ManageAccount;

const ManageContainer = styled.div`
  display: flex;
  margin-bottom: 2%;
  flex-direction: column;
  border: 1px solid lightblue;
  `

const MealPlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid orange; */
  height: 500px;
  justify-content: space-evenly;
  align-items: baseline;
  max-width: 100%; `

const MealCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
  height: 75%;
  max-width: 20%;
  min-width: 30%;
  background-color: #baffae;
  border-radius: 5px;
  `

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  margin: 2%;
  height: 75%;
  width: 300px;
  /* min-width: 30%; */
`

const Text = styled.div`
  padding: 29px 75px 0px;
`