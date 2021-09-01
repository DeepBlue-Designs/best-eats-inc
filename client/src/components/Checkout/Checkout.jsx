import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { calculateAndFormatPrice } from '../Shop/common/helpers.js';

const servings = {
  single: 1,
  duo: 2,
  family: 4,
};

const Checkout = ({ userId }) => {
  const location = useLocation();
  const { mealIDs, plan, mealsPerWeek } = location.state;
  const [confirmation, setConfirmation] = useState(false);

  const handleCheckout = (userId, plan, mealsPerWeek, mealIDs) => {
    const options = {
      plan: plan,
      mealsPerWeek: mealsPerWeek,
      mealIDs: mealIDs,
    }
    axios.put(`/user/${userId}/mealplan/add`, options)
      .then(() => {setConfirmation(true)})
      .catch(() => {console.log('error')});
  };

  if (confirmation) {
    return (
    <div>
      <div>meal plan here</div>
      <div> User Info and Price goes here</div>
      <div onClick={() => {handleCheckout(userId, plan, mealsPerWeek, mealIDs)}}>Checkout</div>
    </div>
    )
  } else {
    return (
      <div>
      <div>meal plan here</div>
      <div>meal kit card here</div>
      <div> User Info and Price goes here</div>
      <div>Checkout</div>
      <div>Congrats, checkout successful!</div>
    </div>
    )
  }
};

export default Checkout;

//userId, plan, mealsPerWeek, mealIDs

//Add Meal Plan:
// put: ​​localhost:3000/user/<user ID>/mealplan/add
// ex: localhost:3000/user/612d93a9d146e0f9f9db5f82/mealplan/add
// req.body: {
// 	plan: String (solo, duo, family),
// 	mealsPerWeek: Number,
// 	mealIDs: array of meal id’s
// 	}
