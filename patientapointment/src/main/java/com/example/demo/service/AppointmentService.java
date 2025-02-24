
package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dto.AppointmentDto;
import com.example.demo.model.Appointment;
import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.repository.PatientRepository;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private PatientRepository patientRepository;

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public String bookAppointment(AppointmentDto appointmentDto) {
        Optional<Doctor> doctorOpt = doctorRepository.findByNameAndSpecialization(appointmentDto.getDoctorName(), appointmentDto.getSpecialization());
        Optional<Patient> patientOpt = patientRepository.findByFirstname(appointmentDto.getFirstname());
        if (doctorOpt.isPresent() && patientOpt.isPresent()) {
            Doctor doctor = doctorOpt.get();
            Patient patient = patientOpt.get();
            Appointment appointment = new Appointment();
            appointment.setDoctor(doctor);
            appointment.setPatient(patient);
            appointment.setSpecialization(appointmentDto.getSpecialization());
            appointment.setAppointmentTime(appointmentDto.getAppointmentTime());
            appointment.setStatus("booked");
            appointmentRepository.save(appointment);
            return "Appointment booked successfully";
        } else {
            return "Doctor or Patient not found";
        }
    }

    public String cancelAppointmentByName(String firstname) {
        try {
            Optional<Patient> patientOpt = patientRepository.findByFirstname(firstname);
            if (patientOpt.isPresent()) {
                Patient patient = patientOpt.get();
                List<Appointment> appointments = appointmentRepository.findByPatient(patient);
                if (!appointments.isEmpty()) {
                    for (Appointment appointment : appointments) {
                        appointment.setStatus("Canceled");
                        appointmentRepository.save(appointment);
                    }
                    return "Appointment(s) canceled successfully";
                } else {
                    return "Appointment not found for this patient";
                }
            } else {
                return "Patient not found";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "An error occurred while canceling the appointment.";
        }
    }
}
