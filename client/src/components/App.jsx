import React, {useState} from 'react';
import Header from './HeaderFooter/Header.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';
import LoginForm from './LoginSignup/LoginForm.jsx';
import SignupForm from './LoginSignup/SignupForm.jsx';

const App = () => {
  return (
  <div>
    <Header />
    <h1>
      <UserProfile />
    </h1>
   </div>
  // <div>
  //   <Header />
  //   <h1>
  //     /<UserProfile />
  //   </h1>
  // </div>
  <LoginForm />
  // <SignupForm />
  );
};

export default App;