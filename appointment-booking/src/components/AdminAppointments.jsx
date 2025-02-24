import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/AdminContent.css';

const AdminAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9080/admin/appointments')
            .then(response => {
                console.log('Full Response Data:', response.data);

                let data;
                if (typeof response.data === 'string') {
                    try {
                        data = JSON.parse(response.data);
                    } catch (error) {
                        console.error('Error parsing JSON data:', error);
                        setAppointments([]);
                        return;
                    }
                } else {
                    data = response.data;
                }

                // Log the data to verify its structure
                console.log('Received Data:', data);

                // Mapping data to match the AppointmentDto structure
                const cleanData = data.map(appointment => {
                    return {
                        id: appointment.id,
                        patientName: appointment.firstname || "Unknown Patient",
                        doctorName: appointment.doctorName || "Unknown Doctor",
                        specialization: appointment.specialization || "Unknown Specialization",
                        appointmentTime: appointment.appointmentTime || "Unknown Time",
                        status: appointment.status || "Unknown Status" // Add this line
                    };
                });

                setAppointments(cleanData);
                console.log('Cleaned Appointments:', cleanData);
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
                setAppointments([]);
            });
    }, []);

    return (
        <div>
            <h2>All Appointments</h2>
            {appointments.length === 0 ? (
                <p>No appointments found.</p>
            ) : (
                <table className="appointments-table">
                    <thead>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Appointment Time</th>
                            <th>Status</th> {/* Add this column */}
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.doctorName}</td>
                                <td>{appointment.specialization}</td>
                                <td>{appointment.appointmentTime}</td>
                                <td>{appointment.status}</td> {/* Add this cell */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminAppointments;
