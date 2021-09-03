import React, {useState} from 'react';
import Header from './HeaderFooter/Header.jsx';
import Context from './Context.jsx';


const App = () => {

  const [userData, setUserData] = useState();

  return (
  <div>
<<<<<<< HEAD
    {/* GLOBAL STYLE COMMENTED OUT FOR SANITY */}
    <GlobalStyle />
=======
>>>>>>> 3201a3793e3b749f40f63ee895c216ac78ce1491
    <Context.Provider value={{userData, setUserData}}>
      <Header />
    </Context.Provider>
   </div>
  );
};

export default App;
