import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Header from './HeaderFooter/Header.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';

const App = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    axios.post('/user/login', { userName: 'xing', password: '12345' })
    .then(({ data }) => {
      setUserData(data);
    })
    .catch((err) => {
      console.log('err', err);
    });
  }, []);

  console.log('USER DATA', userData);

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

