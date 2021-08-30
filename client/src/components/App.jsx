
import Header from './HeaderFooter/Header.jsx';
import React, {useState} from 'react';
import UserProfile from './UserProfile/UserProfile.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <h1>
        Hello World
        <UserProfile />
      </h1>
    </div>
  );
};

export default App;