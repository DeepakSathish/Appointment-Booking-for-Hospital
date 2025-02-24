import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/AdminAuth.css';

const AdminAuth = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9080/admin/login', { password });
            if (response.data === "Login successful") {
                navigate('/admin-profile');
            } else {
                setError(response.data);
                setNotification({ message: response.data, type: 'error' });
                setTimeout(() => setNotification(null), 4000); // Hide notification after 4 seconds
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data);
                setNotification({ message: error.response.data, type: 'error' });
            } else {
                setError('An unexpected error occurred');
                setNotification({ message: 'An unexpected error occurred', type: 'error' });
            }
            setTimeout(() => setNotification(null), 4000); // Hide notification after 4 seconds
        }
    };

    return (
        <div className="admin-auth-wrapper">
            {notification && (
                <div className={`notification ${notification.type}`}>
                    {notification.message}
                </div>
            )}
            <div className="admin-auth-container">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default AdminAuth;
