import React from 'react';
import {useLocation} from 'react-router-dom';


const Checkout = () => {
  const location = useLocation();
  const {nhu} = location.state;

  return (
    <div>Checkout {nhu}</div>
  );
};

export default Checkout;
