import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Context from '../Context.jsx';
import CustomInput from './CustomInput';
import Button from './Button';
import './LoginForm.css';

const LoginForm = () => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(Context);
  let history = useHistory()

  const handleSubmit = () => {
    console.log('Do I submit?')
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
      <div className='LoginForm'>
        <form className='form'>

          <CustomInput
            labelText="Username"
            id="userName"
            handleChange={e => setName(e.target.value)}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            handleChange={e => setPassword(e.target.value)}
            type="password"
          />

          <Button onClick={handleSubmit}>
            Login
          </Button>

        </form>
      </div>

    )}
}

export default LoginForm;