import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AdminAuth from './components/AdminAuth';
import AdminProfile from './components/AdminProfile';
import UserProfile from './components/UserProfile';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import DoctorDetails from './components/DoctorDetails';
import PatientRegistration from './components/PatientRegistration';
import AppointmentBooking from './components/AppointmentBooking';
import AdminAppointments from './components/AdminAppointments';
import NotFound from './components/NotFound'; // Import NotFound

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<DoctorDetails />} />
                <Route path="/register" element={<PatientRegistration />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/admin-auth" element={<AdminAuth />} />
                <Route path="/admin-profile/*" element={<AdminProfile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/appointments" element={<AppointmentBooking />} />
                <Route path="/admin-appointments" element={<AdminAppointments />} />

                {/* Catch-all route for undefined endpoints */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
