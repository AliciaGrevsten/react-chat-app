import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Link, useHistory } from 'react-router-dom';


const Login = () => {

    const history = useHistory();

    const onLoginComplete = (result) => {
        console.log(result);

        if (result) {
            history.replace("/chat");
        }
    };

    /* const onLoginComplete = ({user, token}) => {
        console.log("USER: " + user);
        console.log("TOKEN: " + token);
    }; */

    return (
        <div className="container">
            <LoginForm onLoginClick={onLoginComplete} />
            <br></br>
            <Link to="/register">Don't have an account? Register now!</Link>
        </div>
    )
}

export default Login;