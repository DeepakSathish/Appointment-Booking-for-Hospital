import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AdminNavBar.css';

const AdminNavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-navbar">
            <button onClick={() => navigate('/admin-profile/appointments')}>Appointments</button>
            <button onClick={() => navigate('/admin-profile/patients')}>Patients</button>
            <button onClick={() => navigate('/admin-profile/doctors')}>Doctors</button>
        </div>
    );
};

export default AdminNavBar;
