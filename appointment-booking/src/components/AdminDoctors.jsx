import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/AdminContent.css';

const AdminDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [newDoctor, setNewDoctor] = useState({ name: '', specialization: '' });
    const [updateDoctor, setUpdateDoctor] = useState({ doctorId: '', name: '', specialization: '' });
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = () => {
        axios.get('http://localhost:9080/admin/doctors')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setDoctors(response.data);
                } else {
                    setDoctors([]);
                }
            })
            .catch(error => {
                console.error(error);
                setDoctors([]);
            });
    };

    const addDoctor = () => {
        axios.post('http://localhost:9080/doctors/add', newDoctor)
            .then(response => {
                alert(response.data);
                fetchDoctors();
                setNewDoctor({ name: '', specialization: '' });
            })
            .catch(error => {
                console.error(error);
                alert('An error occurred while adding the doctor.');
            });
    };

    const deleteDoctor = (id) => {
        if (!id) {
            console.error('Invalid doctor ID:', id);
            return;
        }
        console.log(`Deleting doctor with ID: ${id}`); // Additional logging
        axios.delete(`http://localhost:9080/doctors/delete/doctor/${id}`)
            .then(response => {
                alert(response.data);
                // setDoctors(doctors.filter(doctor => doctor.doctorId !== id));
                fetchDoctors();
            })
            .catch(error => {
                console.error('Error deleting doctor:', error);
                alert('An error occurred while deleting the doctor.');
            });
    };

    const updateDoctorDetails = () => {
        console.log('Updating doctor with details:', updateDoctor); // Additional logging
        axios.put('http://localhost:9080/doctors/update', updateDoctor)
            .then(response => {
                alert(response.data);
                fetchDoctors();
                setUpdateDoctor({ doctorId: '', name: '', specialization: '' });
                setShowUpdateForm(false); // Hide update form after successful update
            })
            .catch(error => {
                console.error('Error updating doctor:', error);
                alert('An error occurred while updating the doctor.');
            });
    };

    return (
        <div>
            <h2>All Doctors</h2>
            <div className="doctor-form">
                <h3>Add New Doctor</h3>
                <input
                    type="text"
                    name="name"
                    id="new-doctor-name"
                    placeholder="Name"
                    autoComplete="name"
                    value={newDoctor.name}
                    onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                />
                <input
                    type="text"
                    name="specialization"
                    id="new-doctor-specialization"
                    placeholder="Specialization"
                    autoComplete="specialization"
                    value={newDoctor.specialization}
                    onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
                />
                <button onClick={addDoctor} className="add-button">Add Doctor</button>
            </div>
            {doctors.length === 0 ? (
                <p>No doctors found.</p>
            ) : (
                <table className="doctors-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(doctor => (
                            <tr key={doctor.doctorId}>
                                <td>{doctor.doctorId}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialization}</td>
                                <td>
                                    <button onClick={() => {
                                        console.log('Setting doctor for update:', doctor);
                                        setUpdateDoctor({ doctorId: doctor.doctorId, name: doctor.name, specialization: doctor.specialization });
                                        setShowUpdateForm(true); // Show update form
                                    }} className="update-button">
                                        Update
                                    </button>
                                    <button onClick={() => deleteDoctor(doctor.doctorId)} className="delete-button">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {showUpdateForm && (
                <div className="doctor-form">
                    <h3>Update Doctor</h3>
                    <input
                        type="text"
                        name="name"
                        id="update-doctor-name"
                        placeholder="Name"
                        autoComplete="name"
                        value={updateDoctor.name}
                        onChange={(e) => setUpdateDoctor({ ...updateDoctor, name: e.target.value })}
                    />
                    <input
                        type="text"
                        name="specialization"
                        id="update-doctor-specialization"
                        placeholder="Specialization"
                        autoComplete="specialization"
                        value={updateDoctor.specialization}
                        onChange={(e) => setUpdateDoctor({ ...updateDoctor, specialization: e.target.value })}
                    />
                    <button onClick={updateDoctorDetails} className="update-button">Update Doctor</button>
                </div>
            )}
        </div>
    );
};

export default AdminDoctors;
