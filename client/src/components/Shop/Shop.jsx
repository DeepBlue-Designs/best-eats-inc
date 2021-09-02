import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealPlanList from './MealPlanList.jsx'
import MealList from './MealList.jsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const getMeals = () => axios.get('/meals');
const getMealPlan = () => axios.get('/');

const Shop = ({ loggedIn, userId }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    // TODO: getMealPlan() via axios or context, then setSelectedMealPlan
  }, []);

  const handleRegisterOrCheckoutClick = () => {
    if (loggedIn) {
      console.log('Go to check out');
    } else {
      console.log('Go to registration');
    }
  };

  return (
    <ShopContainer>
      <h2>Menu and Pricing</h2>
      <MealPlanList
        selectedMealPlan={selectedMealPlan}
        setSelectedMealPlan={setSelectedMealPlan}
      />
      {isLoading
      ? <p>Loading delicious meals, please be patient...</p>
      : <MealList
          meals={meals}
          selectedMealPlan={selectedMealPlan}
          setSelectedMealPlan={setSelectedMealPlan}
        />}
             <div>
      <Link to={{
        pathname: '/checkout',
        state: selectedMealPlan,
      }}>
        <button
          type="button"
          onClick={handleRegisterOrCheckoutClick}
        >
        {!loggedIn ? 'Checkout' : 'Register'}
        </button>
        </Link>
      </div>
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  background-color: #f8f8f8;
`;
export default Shop;
