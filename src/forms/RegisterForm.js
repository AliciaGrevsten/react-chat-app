import React, { useState } from 'react';
import { registerUser } from '../api/user.api';


const RegisterForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const registerComplete = async (ev) => {

    setIsLoading(true);

    
    let result;

    try {
        const { status } = await registerUser(username, password);
        result = status === 201;
    } catch (e) {
        setRegisterError(e.message || e);
    } finally {
        setIsLoading(false);
        props.registerComplete(result);
    }

  };

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
        <button
          type="button"
          onClick={registerComplete}
          className="btn btn-primary"
        >
          Register
        </button>

        { isLoading && <div>Registering user..</div> }

        { registerError && <div>{ registerError }</div>}

      </form>
    </div>
  );
};

export default RegisterForm;
