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
      <MealPlanContainer>
        <MealCard>
        <Text>
      Current Meal Plan:
      </Text>
        {currentMeal && currentMeal.mealIDs.length ? <MealPlanCard plan={currentMeal.plan} mealsPerWeek={currentMeal.mealsPerWeek} style={{'background-color': '#BAFFAE'}}/> : "Please Select a MealPlan" }
        </MealCard>
        <ButtonContainer>
          <button onClick={cancelPlan}
          style={{'border': '5px solid #baffae', 'padding':'14px 57px', 'background-color': '#baffae', 'width': 'fit-content', 'box-shadow': 'rgb(0 0 0 / 15%) 0px 2px 6px 0px'
        }}>Cancel</button>
            <Link to="/shop">
              <button style={{'border': '5px solid #BAFFAE', 'padding': '14px 57px', 'background-color': '#baffae','box-shadow': 'rgb(0 0 0 / 15%) 0px 2px 6px 0px'}}>Modify</button>
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
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px 0px;
  `

const MealPlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%; `

const MealCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2%;
  height: 75%;
  width: 300px;
  background-color: rgb(186 255 174 / 24%);
  border: 5px solid #BAFFAE;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 6px 0px;
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
  padding: 6px 20px;
  align-self: flex-start;
  margin-bottom: 5%;
`