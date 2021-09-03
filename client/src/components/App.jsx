import React, {useState} from 'react';
import Header from './HeaderFooter/Header.jsx';
import Context from './Context.jsx';
import GlobalStyle from './GlobalStyle.jsx';


const App = () => {

  const [userData, setUserData] = useState();

  return (
    <div>
    <GlobalStyle/>
    <Context.Provider value={{userData, setUserData}}>
      <Header />
    </Context.Provider>
   </div>
  );
};

export default App;
