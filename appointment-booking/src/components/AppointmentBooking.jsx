
import React, { useState } from 'react';
import axios from 'axios';  // Importing Axios
import './styles/AppointmentBooking.css';

const doctors = [
    { name: "Alan", specialization: "Emergency_Medicine" },
    { name: "Sri Kumar", specialization: "Family_Medicine" },
    { name: "Meera", specialization: "Internal_Medicine" },
    { name: "Rohith", specialization: "Medical_Genetics" },
    { name: "Anbulalitha", specialization: "Cardiology" },
    { name: "Harish", specialization: "Dermatology" },
    { name: "Deepak", specialization: "Neurology" },
    { name: "Suba", specialization: "Eye_speciallist" },
    { name: "Nandhani", specialization: "BOne_speciallist" },
    { name: "Balachandru", specialization: "Dental" }
];

const AppointmentBooking = () => {
    const [appointment, setAppointment] = useState({ 
        firstname: '', 
        doctorName: '', 
        specialization: '', 
        appointmentTime: '' 
    });
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState(''); // 'success' or 'error'
    const today = new Date().toISOString().slice(0, 16);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointment({ ...appointment, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting appointment:', appointment);
            const response = await axios.post('http://localhost:9080/appointments/book', appointment, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response from backend:', response.data);
            setAlertMessage('Appointment booked successfully!');
            setAlertType('success');
            // Clear form after successful booking
            setAppointment({ firstname: '', doctorName: '', specialization: '', appointmentTime: '' });
        } catch (error) {
            console.error('Error booking appointment:', error.response ? error.response.data : error.message);
            setAlertMessage(`Failed to book appointment: ${error.response ? error.response.data.message : error.message}`);
            setAlertType('error');
        }
    };

    const handleCancel = async () => {
        try {
            const response = await axios.delete(`http://localhost:9080/appointments/cancel/${appointment.firstname}`);
            console.log('Response from backend:', response.data);
            setAlertMessage('Appointment canceled successfully');
            setAlertType('success');
        } catch (error) {
            console.error('Error canceling appointment:', error.response ? error.response.data : error.message);
            setAlertMessage(`Failed to cancel appointment: ${error.response ? error.response.data.message : error.message}`);
            setAlertType('error');
        }
    };
    

    return (
        <div className="appointment-booking-wrapper">
            {alertMessage && (
                <div className={`alert-popup ${alertType}`}>
                    {alertMessage}
                </div>
            )}
            <div className="appointment-booking-container">
                <h2>Book Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={appointment.firstname}
                        onChange={handleChange}
                        required
                    />
                    <select name="doctorName" value={appointment.doctorName} onChange={handleChange} required>
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor, index) => (
                            <option key={index} value={doctor.name}>{doctor.name}</option>
                        ))}
                    </select>
                    <select name="specialization" value={appointment.specialization} onChange={handleChange} required>
                        <option value="">Select Specialization</option>
                        {doctors
                            .filter(doctor => doctor.name === appointment.doctorName)
                            .map((doctor, index) => (
                                <option key={index} value={doctor.specialization}>{doctor.specialization}</option>
                            ))}
                    </select>
                    <input
                        type="datetime-local"
                        name="appointmentTime"
                        value={appointment.appointmentTime}
                        onChange={handleChange}
                        min={today}
                        required
                    />
                    <button type="submit">Book Appointment</button>
                    <button type="button" onClick={handleCancel}>Cancel Appointment</button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentBooking;
