package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dto.PatientDto;
import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepository;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }
    public Patient getPatientByFirstname(String firstname) {
        return patientRepository.findByFirstname(firstname).orElse(null);
    }

    // Patient can register their details with this business logic implementation
    public String registerPatient(PatientDto patientDto) {
       
        Patient patient = new Patient();
        patient.setFirstname(patientDto.getFirstname());
        patient.setLastname(patientDto.getLastname());
        patient.setContact(patientDto.getContact());
        patientRepository.save(patient);
        return "patient registered successfully";
    }

    // Patient can delete the details
    public String deletePatientById(long id) {
        Optional<Patient> patient = patientRepository.findById(id);
        if (patient.isPresent()) {
            patientRepository.deleteById(id);
            return "patient details deleted successfully";
        } else {
            return "patient ID not found";
        }
    }
}



