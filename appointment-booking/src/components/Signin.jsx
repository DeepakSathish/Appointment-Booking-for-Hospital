import React, { useState } from 'react';
import axios from 'axios';
import './styles/Signin.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState(null); // State to manage alert message
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!credentials.username) newErrors.username = 'Username is required';
        if (!credentials.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:9080/auth/generateToken', credentials);
            localStorage.setItem('token', response.data);
            setAlert('Signin successful');
            setTimeout(() => {
                navigate('/register'); // Redirect to Patient Registration
            }, 3000); // Redirect after 3 seconds
        } catch (error) {
            setAlert('Error during signin');
            setTimeout(() => setAlert(null), 3000);
        }
    };

    return (
        <div className="signin-wrapper">
            {alert && (
                <div className={`alert-popup ${alert === 'Signin successful' ? 'success' : 'error'}`}>
                    {alert}
                </div>
            )}
            <div className="signin-container">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
