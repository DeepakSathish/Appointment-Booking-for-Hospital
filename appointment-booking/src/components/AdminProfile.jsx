import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminAppointments from './AdminAppointments';
import AdminPatients from './AdminPatients';
import AdminDoctors from './AdminDoctors';
import './styles/AdminProfile.css';

const AdminProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-profile">
            <div className="button-container">
                <button onClick={() => navigate('/admin-profile/appointments')}>Appointments</button>
                <button onClick={() => navigate('/admin-profile/patients')}>Patients</button>
                <button onClick={() => navigate('/admin-profile/doctors')}>Doctors</button>
            </div>
            <div className="admin-content">
                <Routes>
                    <Route path="appointments" element={<AdminAppointments />} />
                    <Route path="patients" element={<AdminPatients />} />
                    <Route path="doctors" element={<AdminDoctors />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminProfile;
