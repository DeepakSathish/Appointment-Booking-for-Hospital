
package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Dto.PatientDto;
import com.example.demo.service.PatientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("patients")
public class PatientController {

    private static final Logger logger = LoggerFactory.getLogger(PatientController.class);

    @Autowired
    private PatientService patientService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> registerPatient(@RequestBody PatientDto patientDto) {
        Map<String, String> response = new HashMap<>();
        try {
            String message = patientService.registerPatient(patientDto);
            response.put("message", message);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("An error occurred during registration.", e);
            response.put("message", "An error occurred during registration.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deletePatient(@PathVariable long id) {
        Map<String, String> response = new HashMap<>();
        try {
            String message = patientService.deletePatientById(id);
            response.put("message", message);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("An error occurred while deleting the patient.", e);
            response.put("message", "An error occurred while deleting the patient.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}

