import React from 'react';
import RegisterForm from '../forms/RegisterForm';
import { Link, useHistory } from 'react-router-dom';


const Register = () => {

    const history = useHistory();

    const handleRegisterComplete = (result) => {
        console.log(result);

        if (result) {
            history.replace("/chat");
        }
    };

    return (
        <div className="container">
            <RegisterForm registerComplete={ handleRegisterComplete } />
            <br></br>
            <Link to="/login">Already have an account? Login now!</Link>
        </div>
    );
}

export default Register;