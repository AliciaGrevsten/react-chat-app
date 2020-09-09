import React, { useState } from 'react';
import { loginUser } from '../api/user.api';

const LoginForm = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const onLoginClick = async () => {
    setIsLoading(true);
    setLoginError('');
    let result;

    try {
      result = await loginUser(username, password);
    } catch (e) {

    } finally {
      setIsLoading(false);
      props.onLoginClick(result.data);
    }

  }

  const onUsernameChange = (ev) => setUsername(ev.target.value.trim());
  const onPasswordChange = (ev) => setPassword(ev.target.value.trim());

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="usernameInput">Username</label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            placeholder="Enter username"
            onChange={onUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            onChange={onPasswordChange}
          />
        </div>
        <button type="button" onClick= { onLoginClick } className="btn btn-primary">
          Login
        </button>

        { isLoading && <p>Logging in..</p> }
        { loginError && <p>{ loginError }</p> }
      </form>
    </div>
  );
};


export default LoginForm;
