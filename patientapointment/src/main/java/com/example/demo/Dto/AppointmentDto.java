package com.example.demo.Dto;

import java.time.LocalDateTime;
import com.example.demo.model.Specialization;

public class AppointmentDto {
    private Long id;
    private String doctorName;
    private String firstname;
    private Specialization specialization;
    private LocalDateTime appointmentTime;
    private String status; // Add this line

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public Specialization getSpecialization() {
        return specialization;
    }

    public void setSpecialization(Specialization specialization) {
        this.specialization = specialization;
    }

    public LocalDateTime getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(LocalDateTime appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getStatus() { // Add this getter
        return status;
    }

    public void setStatus(String status) { // Add this setter
        this.status = status;
    }
}
