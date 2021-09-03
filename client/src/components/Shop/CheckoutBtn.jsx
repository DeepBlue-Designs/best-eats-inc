import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutBtn = ({ verifyMeals, selectedMealPlan }) => (
  verifyMeals()
  ? (<Link to={{
      pathname: '/checkout',
      state: selectedMealPlan,
    }}>
    <Button type="button" onClick={verifyMeals}>Ready to Checkout!</Button>
    </Link>)
  : (
    <Button type="button" onClick={verifyMeals}>Keep Selecting Delicious Meals!</Button>)
);

const Button = styled.button`
  padding: 10px;
  font-size: 1em;
`;

export default CheckoutBtn;