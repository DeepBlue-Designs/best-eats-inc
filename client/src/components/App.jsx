import React, {useState} from 'react';
import GlobalStyle from './GlobalStyle.jsx';
import Header from './HeaderFooter/Header.jsx';
import Context from './Context.jsx';


const App = () => {
  const [userData, setUserData] = useState();

  return (
  <div>
    {/* GLOBAL STYLE COMMENTED OUT FOR SANITY */}
    <GlobalStyle />
    <Context.Provider value={{userData, setUserData}}>
      <Header />
    </Context.Provider>
   </div>
  );
};

export default App;
