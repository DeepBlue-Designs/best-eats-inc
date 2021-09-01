import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <br />
      <label> Name: </label>
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

      <br />

      <label> Email: </label>
      <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
      />

      <br />
      <label> Shipping Address: </label>
      <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
      />
      <div>
        <button>
          create account
        </button>
      </div>
    </form>
  )
}

export default SignupForm;
