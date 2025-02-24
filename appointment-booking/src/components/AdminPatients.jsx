
import React, { useState, useEffect } from 'react'; // Add the missing imports
import axios from 'axios';
import './styles/AdminContent.css';

const AdminPatients = () => {
    const [patients, setPatients] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:9080/admin/patients')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setPatients(response.data);
                } else {
                    setPatients([]);
                }
            })
            .catch(error => {
                console.error(error);
                setPatients([]);
            });
    }, []);

    const deletePatient = (id) => {
        axios.delete(`http://localhost:9080/patients/${id}`)
            .then(response => {
                setPatients(patients.filter(patient => patient.id !== id));
                
                alert(response.data.message);
            })
            .catch(error => {
                console.error(error);
                alert('An error occurred while deleting the patient.');
            });
    };

    return (
        
        <div>
            <h2>All Patients</h2>
            {patients.length === 0 ? (
                <p>No patients found.</p>
            ) : (
                <table className="patients-table">
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.firstname}</td>
                                <td>{patient.lastname}</td>
                                <td>{patient.contact}</td>
                                <td>
                                    <button onClick={() => deletePatient(patient.id)} className="delete-button">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        
    );
};

export default AdminPatients;
