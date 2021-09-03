import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutBtn = ({ verifyMeals, selectedMealPlan }) => (
  verifyMeals()
  ? (<Link to={{
      pathname: '/checkout',
      state: selectedMealPlan,
    }}>
    <button type="button" onClick={verifyMeals}>Ready to Checkout!</button>
    </Link>)
  : (
    <button type="button" onClick={verifyMeals}>Keep Selecting Delicious Meals!</button>)
);

export default CheckoutBtn;