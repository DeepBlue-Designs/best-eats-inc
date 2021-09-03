import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Context from '../Context.jsx'
import MealPlanList from './MealPlanList.jsx'
import MealList from './MealList.jsx';
import DisplaySelections from './DisplaySelections.jsx';
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

  return (
    <ShopContainer>
      <h2>Menu and Pricing</h2>
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
        <div>
          {userData
          ? (
          <Link to={{
            pathname: '/checkout',
            state: selectedMealPlan,
          }}>
            <button type="button">Checkout</button>
          </Link>
          )
          : (
          <Link to= '/signup'>
            <button type="button">Register</button>
          </Link>
          )}
        </div>
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  background-color: #f8f8f8;
`;
export default Shop;
