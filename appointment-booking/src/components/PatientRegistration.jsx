import React, { useState } from 'react';
import axios from 'axios';
import './styles/PatientRegistration.css';
import { useNavigate } from 'react-router-dom';

const PatientRegistration = () => {
    const [patient, setPatient] = useState({ firstname: '', lastname: '', contact: '' });
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!patient.firstname) newErrors.firstname = 'First Name is required';
        if (!patient.lastname) newErrors.lastname = 'Last Name is required';
        if (!patient.contact) newErrors.contact = 'Contact is required';
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
            const response = await axios.post('http://localhost:9080/patients/register', patient);
            setAlert(response.data.message);
            if (response.data.message === "patient registered successfully") {
                setTimeout(() => {
                    navigate('/appointments'); // Redirect to booking page after 3 seconds
                }, 3000);
            }
        } catch (error) {
            setAlert('Error during registration');
            setTimeout(() => setAlert(null), 3000);
        }
    };

    return (
        <div className="patient-registration-wrapper">
            {alert && (
                <div className={`alert-popup ${alert === "patient registered successfully" ? "success" : "error"}`}>
                    {alert}
                </div>
            )}
            <div className="patient-registration-container">
                <h2>Patient Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={patient.firstname}
                        onChange={handleChange}
                    />
                    {errors.firstname && <p className="error">{errors.firstname}</p>}
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={patient.lastname}
                        onChange={handleChange}
                    />
                    {errors.lastname && <p className="error">{errors.lastname}</p>}
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact"
                        value={patient.contact}
                        onChange={handleChange}
                    />
                    {errors.contact && <p className="error">{errors.contact}</p>}
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default PatientRegistration;
