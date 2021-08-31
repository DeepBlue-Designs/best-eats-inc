import React, {useState} from 'react';
import Header from './HeaderFooter/Header.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';

const App = () => {
  return (
  <div>
    <Header />
    <h1>
      <UserProfile />
    </h1>
   </div>
  );
};

export default App;