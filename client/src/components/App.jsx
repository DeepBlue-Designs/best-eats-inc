import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Header from './HeaderFooter/Header.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';
// import LoginForm from './LoginSignup/LoginForm.jsx';
import SignupForm from './LoginSignup/SignupForm.jsx';

const App = () => {
  return (
  <div>
    <Header />
    <h1>
      /<UserProfile />
    </h1>
  </div>
  );
};

export default App;

