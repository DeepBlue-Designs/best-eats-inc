import React, {useState, createContext } from 'react';
import Header from './HeaderFooter/Header.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';
import Context from './Context.jsx';

const App = () => {



  const [userData, setUserData] = useState();

  return (
  <div>
    <Context.Provider value={{userData, setUserData}}>
      <Header />
    </Context.Provider>
   </div>
  );
};

export default App;