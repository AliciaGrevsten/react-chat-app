import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Link } from 'react-router-dom';


const Login = () => {

    const onLoginComplete = (result) => {
        console.log(result);
    };

    /* const onLoginComplete = ({user, token}) => {
        console.log("USER: " + user);
        console.log("TOKEN: " + token);
    }; */

    return (
        <div className="container">
            <LoginForm onLoginClick={onLoginComplete} />
            <br></br>
            <Link to="/login">Don't have an account? Register now!</Link>
        </div>
    )
}

export default Login;