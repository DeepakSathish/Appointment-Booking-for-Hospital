package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Dto.AppointmentDto;
import com.example.demo.Dto.DoctorDto;
import com.example.demo.Dto.PatientDto;
import com.example.demo.model.Appointment;
import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import com.example.demo.service.AppointmentService;
import com.example.demo.service.DoctorService;
import com.example.demo.service.PatientService;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@RequestMapping("admin")
public class AdminController {
    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private PatientService patientService;
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String password = credentials.get("password");
        // Default password
        try {
            if ("admin123".equals(password)) {
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
        }
    }

    @GetMapping("/appointments")
    public ResponseEntity<?> viewAllAppointments() {
        try {
            List<Appointment> appointments = appointmentService.getAllAppointments();
            List<AppointmentDto> appointmentDTOs = appointments.stream()
                    .map(appointment -> {
                        AppointmentDto dto = new AppointmentDto();
                        dto.setId(appointment.getId());
                        dto.setDoctorName(appointment.getDoctor() != null ? appointment.getDoctor().getName() : "Unknown Doctor");
                        dto.setFirstname(appointment.getPatient() != null ? appointment.getPatient().getFirstname() : "Unknown Patient");
                        dto.setSpecialization(appointment.getDoctor() != null ? appointment.getDoctor().getSpecialization() : null);
                        dto.setAppointmentTime(appointment.getAppointmentTime());
                        dto.setStatus(appointment.getStatus()); // Add this line
                        return dto;
                    })
                    .collect(Collectors.toList());

            return ResponseEntity.ok(appointmentDTOs);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching appointments: " + e.getMessage());
        }
    }



    @GetMapping("/patients")
    public ResponseEntity<?> viewAllPatients(){
        try {
            List<Patient> patients = patientService.getAllPatients();
            List<PatientDto> patientDTOs = patients.stream()
                    .map(patient -> {
                        PatientDto dto = new PatientDto();
                        dto.setId(patient.getId());
                        dto.setFirstname(patient.getFirstname());
                        dto.setLastname(patient.getLastname());
                        dto.setContact(patient.getContact());
                        return dto;
                    })
                    .collect(Collectors.toList());
            return ResponseEntity.ok(patientDTOs);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching patients: " + e.getMessage());
        }
    }

    
    @GetMapping("/doctors")
    public ResponseEntity<?> viewAllDoctors(){
        try {
            List<Doctor> doctors = doctorService.getAllDoctors();
            List<DoctorDto> doctorDTOs = doctors.stream()
                    .map(doctor -> {
                        DoctorDto dto = new DoctorDto();
                        dto.setDoctorId(doctor.getId());
                        dto.setName(doctor.getName());
                        dto.setSpecialization(doctor.getSpecialization());
                        return dto;
                    })
                    .collect(Collectors.toList());
            return ResponseEntity.ok(doctorDTOs);
        } catch (Exception e) {
            e.printStackTrace(); // Log the error for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching doctors: " + e.getMessage());
        }
    }


}
