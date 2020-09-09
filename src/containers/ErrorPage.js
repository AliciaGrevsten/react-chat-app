import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1>404. Page not found</h1>

            <Link to="/login">Go to login</Link>
        </div>
    );
}

export default ErrorPage;