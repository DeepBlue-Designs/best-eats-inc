import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios.post('/user/login', {
        userName: userName,
        password: password,
      })
      .then(() => console.log('log in successfully'))
      .catch(() => console.log('fail to log in'))
    event.preventDefault();
  }

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
  )
}

export default LoginForm;