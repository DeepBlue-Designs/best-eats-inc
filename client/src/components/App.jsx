import React, {useState} from 'react';
import UserProfile from './UserProfile/UserProfile.jsx';

const App = (props) => {
  return (
    <h1>
      Hello World
      <UserProfile />
    </h1>
  );
};

export default App;