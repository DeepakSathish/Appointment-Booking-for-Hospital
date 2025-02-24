import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
import { FaUserCircle, FaUserShield } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-title">CTS-MEDI-CARE-Hospital Appointment Booking</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/doctors">Doctor Details</Link></li>
                <li className="navbar-profile">
                    <FaUserCircle size={24} />
                    <span>User</span>
                    <ul className="dropdown">
                        <li><Link to="/signup">User Signup</Link></li>
                        <li><Link to="/signin">User Signin</Link></li>
                    </ul>
                </li>
                <li className="navbar-admin-profile">
                    <FaUserShield size={24} />
                    <span>Admin</span>
                    <ul className="dropdown">
                        <li><Link to="/admin-auth">Admin Authorization</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
