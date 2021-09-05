import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Context from '../Context.jsx'
import MealPlanList from './MealPlanList.jsx'
import MealList from './MealList.jsx';
import DisplaySelections from './DisplaySelections.jsx';
import CheckoutBtn from './CheckoutBtn.jsx';
import styled from 'styled-components';

const getMeals = () => axios.get('/meals');

const Shop = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userData } = useContext(Context);

  const [selectedMealPlan, setSelectedMealPlan] = useState({
    plan: 'solo',
    mealsPerWeek: 2,
    mealIDs: [],
  });

  useEffect(() => {
    getMeals()
      .then((data) => {
        setMeals(data.data.results);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Error retrieving meals', err);
      });
  }, []);

  useEffect(() => {
    if (userData?.currentMealPlan.plan) {
      setSelectedMealPlan(userData.currentMealPlan);
    }
  }, [userData]);

  const verifyMeals = () => {
    const areMealsSelected = selectedMealPlan.mealIDs?.length === selectedMealPlan.mealsPerWeek;
    const isPlanSelected = selectedMealPlan.plan !== '';
    console.log(areMealsSelected, isPlanSelected, selectedMealPlan.mealIDs)
    return areMealsSelected && isPlanSelected;
  }

  return (
    <ShopContainer>
      <h1>Menu &amp; Pricing</h1>
      <MealPlanList
        selectedMealPlan={selectedMealPlan}
        setSelectedMealPlan={setSelectedMealPlan}
      />
      <DisplaySelections
        selectedMealPlan={selectedMealPlan}
        setSelectedMealPlan={setSelectedMealPlan}
      />
      <h2>All Meals</h2>
      {isLoading
      ? <p>Loading delicious meals, please be patient...</p>
      : (
        <MealList
          meals={meals}
          selectedMealPlan={selectedMealPlan}
          setSelectedMealPlan={setSelectedMealPlan}
        />
      )}
        <CheckoutDiv>
          {userData
          ?
          <CheckoutBtn verifyMeals={verifyMeals} selectedMealPlan={selectedMealPlan}/>
          : (
          <Link to= '/signup'>
            <Button type="button">Register</Button>
          </Link>
          )}
        </CheckoutDiv>
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  & h1, h2, h3 {
    padding: 1em 0;
  }
  margin: auto;
  width: 90vw;
`;

const CheckoutDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  text-transform: uppercase;
`;
export default Shop;
