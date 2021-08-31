import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // axios.get('/user/login', {

    // })
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <br />
      <label> Email: </label>
      <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.email)}
      />
      <br />
      <label> Password: </label>
      <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
      />
    </form>
  )
}


export default LoginForm;