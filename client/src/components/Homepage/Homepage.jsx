import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from '../App.jsx';
import Checkout from '../Checkout/Checkout.jsx';

const Homepage = ( {test} ) => {
  return (
    <div>
      <div>Homepage {test}</div>
        <Link to={{
          pathname:'/checkout',
          state: {
            nhu: 'smart'
          }
        }} >test link back to checkout</Link>
    </div>


  );
};

export default Homepage;
