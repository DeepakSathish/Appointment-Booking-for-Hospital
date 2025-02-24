package com.example.demo.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Dto.AppointmentDto;
import com.example.demo.model.Patient;
import com.example.demo.service.AppointmentService;
import com.example.demo.service.PatientService;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private PatientService patientService;

    @PostMapping("/book")
    public ResponseEntity<Map<String, String>> bookAppointment(@RequestBody AppointmentDto appointmentDto) {
        Map<String, String> response = new HashMap<>();
        try {
            String message = appointmentService.bookAppointment(appointmentDto);
            response.put("message", message);
            if ("Appointment booked successfully".equals(message)) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }
        } catch (Exception e) {
            response.put("message", "An error occurred while booking the appointment.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/cancel/{firstname}")
    public ResponseEntity<Map<String, String>> cancelAppointment(@PathVariable String firstname) {
        Map<String, String> response = new HashMap<>();
        try {
            String message = appointmentService.cancelAppointmentByName(firstname);
            response.put("message", message);
            if ("Appointment(s) canceled successfully".equals(message)) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }
        } catch (Exception e) {
            response.put("message", "An error occurred while canceling the appointment.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}

//    @GetMapping("/getByFirstname/{firstname}")
//    public ResponseEntity<Patient> getPatientByFirstname(@PathVariable String firstname) {
//        Patient patient = patientService.getPatientByFirstname(firstname);
//        if (patient != null) {
//            return ResponseEntity.ok(patient);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//    }
//}
