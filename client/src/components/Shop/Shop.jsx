import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealList from './MealList.jsx';
import styled from 'styled-components';

const getMeals = () => axios.get('/meals');

const Shop = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <ShopContainer>
    <h2>Menu and Pricing</h2>
    {isLoading
    ? <p>Loading delicious meals, please be patient...</p>
    : <MealList meals={meals} />}
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  background-color: #f8f8f8;
`;
export default Shop;
