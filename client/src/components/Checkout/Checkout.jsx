import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { calculateAndFormatPrice } from '../Shop/common/helpers.js';
import MealPlanCard from '../Shop/common/MealPlanCard.jsx';
import Context from '../Context.jsx';

const servings = {
  solo: 1,
  duo: 2,
  family: 4,
};

const priceInfo = {
  solo: {
    serving: 1,
    baselinePrice: 15.99,
  },
  duo: {
    serving: 2,
    baselinePrice: 12.49,
  },
  family: {
    serving: 4,
    baselinePrice: 8.99,
  },
};

const Checkout = () => {
  const location = useLocation();
  const { mealIDs, plan, mealsPerWeek } = location.state;
  const [confirmation, setConfirmation] = useState(false);
  const { userData, setUserData } = useContext(Context);

  const handleCheckout = (userId, plan, mealsPerWeek, mealIDs) => {
    const options = {
      plan: plan,
      mealsPerWeek: mealsPerWeek,
      mealIDs: mealIDs,
    }
    axios.put(`/user/${userData._id}/mealplan/add`, options)
      .then((res) => {
        setUserData(res.data);
        setConfirmation(true);
      })
      .catch(() => {console.log('error')});
  };

  if (!confirmation) {
    return (
    <div>
      <div><MealPlanCard plan={plan} mealsPerWeek={mealsPerWeek}/></div>
      <div>Username: {userData.userName} <br/> email: {userData.email} <br/> Address: {userData.address} <br/> Price: {calculateAndFormatPrice(priceInfo[plan].baselinePrice, priceInfo[plan].serving, mealsPerWeek)}</div>
      <button onClick={() => {handleCheckout(userData._id, plan, mealsPerWeek, mealIDs)}}>Checkout</button>
    </div>
    )
  } else {
    return (
      <div>
      <div><MealPlanCard plan={plan} mealsPerWeek={mealsPerWeek}/></div>
      <div>Username: {userData.userName} <br/> email: {userData.email} <br/> Address: {userData.address} <br/> Price: {calculateAndFormatPrice(priceInfo[plan].baselinePrice, priceInfo[plan].serving, mealsPerWeek)}</div>
      <button onClick={() => {handleCheckout(userData._id, plan, mealsPerWeek, mealIDs)}}>Checkout</button>
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
