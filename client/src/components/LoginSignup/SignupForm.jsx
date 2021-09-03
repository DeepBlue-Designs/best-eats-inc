import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CustomInput from './CustomInput';
import Button from './Button';
import './LoginForm.css';

const SignupForm = () => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  let history = useHistory()

  const isEmpty = () => {
    let isEmpty = false;
    if(userName === '' || email === '' || password === '' || address === '') {
      isEmpty = true
    }
    return isEmpty
  }

  const validEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email)
  }

  const handleSubmit = (event) => {
    if (isEmpty()) {
      alert('input field can not be empty');
    } else if (!validEmail()) {
      alert('Email must be of form local@domain')
    } else {
      axios.post('/user/signup', {
        userName: userName,
        password: password,
        email: email,
        address: address
      })
      .then(history.push('/login'))
      .catch(() => console.log('fail to create user account'))
    }
    event.preventDefault();
  }

  return (
    <div className='LoginForm'>
      <form className="form">
        <h1>Sign Up</h1>

        <CustomInput
          labelText="Username"
          id="userName"
          value={userName}
          handleChange={e => setName(e.target.value)}
          type="text"
        />

        <CustomInput
          labelText="Password"
          id="password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          type="password"
        />

        <CustomInput
          labelText="Email"
          id="email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
          type="text"
        />

        <CustomInput
          labelText="Shipping Address"
          id="address"
          value={address}
          handleChange={e => setAddress(e.target.value)}
          type="text"
        />

        <Button onClick={handleSubmit}>
          Creat an account
        </Button>
      </form>

    </div>

  )
}

export default SignupForm;
