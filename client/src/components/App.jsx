<<<<<<< HEAD
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Header from "./HeaderFooter/Header.jsx";
import UserProfile from "./UserProfile/UserProfile.jsx";
=======
import React, {useState} from 'react';
import Header from './HeaderFooter/Header.jsx';
import Context from './Context.jsx';

>>>>>>> 9b6763a87cd4e24f1e3174526750fdfae19df726

const App = () => {



  const [userData, setUserData] = useState();

  return (
<<<<<<< HEAD
    <div>
      <Header />
      <h1>
        /<UserProfile />
      </h1>
    </div>
  );
};

export default App;
=======
  <div>
    <Context.Provider value={{userData, setUserData}}>
      <Header />
    </Context.Provider>
   </div>
  );
};

export default App;
>>>>>>> 9b6763a87cd4e24f1e3174526750fdfae19df726
