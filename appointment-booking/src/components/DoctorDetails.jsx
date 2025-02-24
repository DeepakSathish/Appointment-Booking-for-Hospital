import React from 'react';
import './styles/DoctorDetails.css';

const doctors = [
    {
        name: "Dr.Alan",
        specialization: "Emergency Medicine",
        experience: 15,
        degrees: "MD, Emergency Medicine",
        skills: "Trauma Care, Emergency Response",
        imgUrl: "https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?t=st=1738479798~exp=1738483398~hmac=ad3324098aff7009faa05e5a932701beaa47ecffbd53f2b5963c41f01c0372c7&w=900",
        timeTable: {
            Monday: "9:00 AM - 5:00 PM",
            Tuesday: "9:00 AM - 5:00 PM",
            Wednesday: "9:00 AM - 5:00 PM",
            Thursday: "9:00 AM - 5:00 PM",
            Friday: "9:00 AM - 5:00 PM",
            Saturday: "10:00 AM - 2:00 PM",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Sri Kumar",
        specialization: "Family Medicine",
        experience: 12,
        degrees: "MD, Family Medicine",
        skills: "Preventive Care, Chronic Disease Management",
        imgUrl: "https://img.freepik.com/free-photo/portrait-happy-male-doctor-dressed-uniform_171337-109.jpg?t=st=1738479859~exp=1738483459~hmac=6671856abf59a24744c26199e1875fcc512266a18f749e6a1a88a066815b09f1&w=900",
        timeTable: {
            Monday: "10:00 AM - 6:00 PM",
            Tuesday: "10:00 AM - 6:00 PM",
            Wednesday: "10:00 AM - 6:00 PM",
            Thursday: "10:00 AM - 6:00 PM",
            Friday: "10:00 AM - 6:00 PM",
            Saturday: "Off",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Meera",
        specialization: "Internal Medicine",
        experience: 20,
        degrees: "MD, Internal Medicine",
        skills: "Diagnostics, Patient Care",
        imgUrl: "https://img.freepik.com/premium-photo/portrait-doctor-woman-uniform-blue-background_159057-1502.jpg?w=900",
        timeTable: {
            Monday: "9:00 AM - 4:00 PM",
            Tuesday: "9:00 AM - 4:00 PM",
            Wednesday: "9:00 AM - 4:00 PM",
            Thursday: "9:00 AM - 4:00 PM",
            Friday: "9:00 AM - 4:00 PM",
            Saturday: "9:00 AM - 1:00 PM",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Rohith",
        specialization: "Medical Genetics",
        experience: 10,
        degrees: "MD, Medical Genetics",
        skills: "Genetic Counseling, Research",
        imgUrl: "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1738479935~exp=1738483535~hmac=917aefd6edc37d5e341c243ddccda3c9273545a0959e19a6b0192cc1ae49df29&w=900",
        timeTable: {
            Monday: "11:00 AM - 7:00 PM",
            Tuesday: "11:00 AM - 7:00 PM",
            Wednesday: "11:00 AM - 7:00 PM",
            Thursday: "11:00 AM - 7:00 PM",
            Friday: "11:00 AM - 7:00 PM",
            Saturday: "Off",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Anbulalitha",
        specialization: "Cardiology",
        experience: 18,
        degrees: "MD, Cardiology",
        skills: "Cardiac Surgery, Heart Disease Management",
        imgUrl: "https://img.freepik.com/premium-photo/close-up-portrait-young-woman-doctor_274222-16353.jpg?w=900",
        timeTable: {
            Monday: "9:00 AM - 5:00 PM",
            Tuesday: "9:00 AM - 5:00 PM",
            Wednesday: "9:00 AM - 5:00 PM",
            Thursday: "9:00 AM - 5:00 PM",
            Friday: "9:00 AM - 5:00 PM",
            Saturday: "10:00 AM - 2:00 PM",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Harish",
        specialization: "Dermatology",
        experience: 8,
        degrees: "MD, Dermatology",
        skills: "Skin Care, Cosmetic Procedures",
        imgUrl: "https://img.freepik.com/premium-photo/portrait-male-doctor-with-stethoscope-arm-cross-isolated-white-wall-health-insurance-concept_3544-1512.jpg?w=900",
        timeTable: {
            Monday: "9:00 AM - 4:00 PM",
            Tuesday: "9:00 AM - 4:00 PM",
            Wednesday: "9:00 AM - 4:00 PM",
            Thursday: "9:00 AM - 4:00 PM",
            Friday: "9:00 AM - 4:00 PM",
            Saturday: "9:00 AM - 1:00 PM",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Deepak",
        specialization: "Neurology",
        experience: 22,
        degrees: "MD, Neurology",
        skills: "Neurodiagnostics, Neurological Disorders",
        imgUrl: "https://img.freepik.com/free-photo/young-man-doctor-wearing-white-coat-stethoscope-looking-confident-with-crossed-arms-1_141793-12597.jpg?t=st=1738480239~exp=1738483839~hmac=84bf9a377b49617a17d2690454c64993706b3dc4e49f95dadabb2f381c9ed28b&w=900",
        timeTable: {
            Monday: "10:00 AM - 6:00 PM",
            Tuesday: "10:00 AM - 6:00 PM",
            Wednesday: "10:00 AM - 6:00 PM",
            Thursday: "10:00 AM - 6:00 PM",
            Friday: "10:00 AM - 6:00 PM",
            Saturday: "Off",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Suba",
        specialization: "Eye Specialist",
        experience: 15,
        degrees: "MD, Ophthalmology",
        skills: "Eye Surgery, Vision Care",
        imgUrl: "https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-stethoscope-smiling-confident-standing-with-arms-crossed-white-wall_141793-47701.jpg?t=st=1738480285~exp=1738483885~hmac=e124e84bac527505c2b72ad183c5ccb2f6ab061da5c0f906742135888495c943&w=900",
        timeTable: {
            Monday: "11:00 AM - 7:00 PM",
            Tuesday: "11:00 AM - 7:00 PM",
            Wednesday: "11:00 AM - 7:00 PM",
            Thursday: "11:00 AM - 7:00 PM",
            Friday: "11:00 AM - 7:00 PM",
            Saturday: "Off",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Nandhani",
        specialization: "Bone Specialist",
        experience: 12,
        degrees: "MD, Orthopedics",
        skills: "Bone Surgery, Fracture Treatment",
        imgUrl: "https://img.freepik.com/premium-photo/young-pretty-physician-feeling-happy-positive-successful-motivated-when-facing-challenge-celebrating-good-results_1194-118396.jpg?w=900",
        timeTable: {
            Monday: "9:00 AM - 5:00 PM",
            Tuesday: "9:00 AM - 5:00 PM",
            Wednesday: "9:00 AM - 5:00 PM",
            Thursday: "9:00 AM - 5:00 PM",
            Friday: "9:00 AM - 5:00 PM",
            Saturday: "10:00 AM - 2:00 PM",
            Sunday: "Off"
        }
    },
    {
        name: "Dr. Balachandru",
        specialization: "Dental",
        experience: 10,
        degrees: "DDS, Dentistry",
        skills: "Oral Surgery, Dental Care",
        imgUrl: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1738480334~exp=1738483934~hmac=87e50d118cc14444dd939f7fbd9c57cbfb3423c443efe62f843769a6956de50f&w=740",
        timeTable: {
            Monday: "9:00 AM - 4:00 PM",
            Tuesday: "9:00 AM - 4:00 PM",
            Wednesday: "9:00 AM - 4:00 PM",
            Thursday: "9:00 AM - 4:00 PM",
            Friday: "9:00 AM - 4:00 PM",
            Saturday: "9:00 AM - 1:00 PM",
            Sunday: "Off"
        }
    }
];

const DoctorDetails = () => {
    return (
        <div className="doctor-details-container">
            <h2>Doctor Details</h2>
            <div className="doctor-list">
                {doctors.map((doctor, index) => (
                    <div key={index} className="doctor-box">
                        <img src={doctor.imgUrl} alt={doctor.name} className="doctor-image" />
                        <div className="doctor-info">
                            <h3>{doctor.name}</h3>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Experience:</strong> {doctor.experience} years</p>
                            <p><strong>Degrees:</strong> {doctor.degrees}</p>
                            <p><strong>Skills:</strong> {doctor.skills}</p>
                            <h4>Available Time Slots:</h4>
                            <table className="time-table">
                                <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(doctor.timeTable).map(day => (
                                        <tr key={day}>
                                            <td>{day}</td>
                                            <td>{doctor.timeTable[day]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorDetails;