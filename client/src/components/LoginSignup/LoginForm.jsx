import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Context from '../Context.jsx';

const LoginForm = () => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(Context);
  let history = useHistory()

  const handleSubmit = () => {
    axios.post('/user/login', {
        "userName": userName,
        "password": password,
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => console.log('fail to log in'))
    event.preventDefault();
  }
  if (userData) {
    console.log(userData);
    history.push('/profile');
    return(<>this return exists to satisfy the requirements for returning something by the browser</>);
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <br />
        <label> Username: </label>
        <input
            type="text"
            value={userName}
            onChange={e => setName(e.target.value)}
        />
        <br />
        <label> Password: </label>
        <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <div>
          <button>
            Login
          </button>
        </div>
      </form>
    )}
}

export default LoginForm;