package com.cookiebytes.cookiewatch.controller;


import com.cookiebytes.cookiewatch.dto.CreateDoctorRequest;
import com.cookiebytes.cookiewatch.dto.DoctorDTO;
import com.cookiebytes.cookiewatch.service.AdminDoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/admin/doctor")
public class AdminDoctorController {
    private final AdminDoctorService adminDoctorService;

    @Autowired
    public AdminDoctorController(AdminDoctorService adminDoctorService) {
        this.adminDoctorService = adminDoctorService;
    }

    @PostMapping
    public ResponseEntity<String> addDoctor(@RequestBody CreateDoctorRequest doctorRequest) {
        DoctorDTO response = adminDoctorService.addDoctor(doctorRequest);
        return ResponseEntity.ok("Doctor created with ID: " + response.getId());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DoctorDTO> getDoctor(@PathVariable Integer id) {
        DoctorDTO response = adminDoctorService.getDoctor(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateDoctor(@PathVariable Integer id, @RequestBody DoctorDTO doctorDTO) {
        doctorDTO.setId(id);
        adminDoctorService.updateDoctor(id, doctorDTO);
        return ResponseEntity.ok("Doctor updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDoctor(@PathVariable Integer id) {
        adminDoctorService.deleteDoctor(id);
        return ResponseEntity.ok("Doctor deleted successfully");
    }

    @GetMapping("/list")
    public ResponseEntity<List<DoctorDTO>> listDoctors() {
        List<DoctorDTO> doctors = adminDoctorService.listDoctors();
        return ResponseEntity.ok(doctors);
    }
}
