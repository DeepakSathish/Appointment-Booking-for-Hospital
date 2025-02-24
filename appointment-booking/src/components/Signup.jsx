import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/Signup.css';

const Signup = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!user.name) newErrors.name = 'Name is required';
        if (!user.email) newErrors.email = 'Email is required';
        if (!user.password) newErrors.password = 'Password is required';
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
            const newUser = { ...user, roles: 'user' }; // Automatically set roles to 'user'
            const response = await axios.post('http://localhost:9080/auth/addNewUser', newUser);
            setAlert({ message: response.data, type: 'success' });
            setTimeout(() => {
                setAlert(null);
                navigate('/register'); // Redirect to Patient Registration
            }, 3000);
        } catch (error) {
            setAlert({ message: 'Error during signup', type: 'error' });
            setTimeout(() => setAlert(null), 3000);
        }
    };

    return (
        <div className="signup-wrapper">
            {alert && (
                <div className={`alert-popup ${alert.type}`}>
                    {alert.message}
                </div>
            )}
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <input
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
