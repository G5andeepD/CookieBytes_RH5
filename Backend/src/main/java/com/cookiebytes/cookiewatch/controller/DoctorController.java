package com.cookiebytes.cookiewatch.controller;

import com.cookiebytes.cookiewatch.dto.CreateMedicalRecordRequest;
import com.cookiebytes.cookiewatch.entity.Citizen;
import com.cookiebytes.cookiewatch.service.CitizenService;
import com.cookiebytes.cookiewatch.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/doctor/")
public class DoctorController {
    @Autowired
    private final CitizenService citizenService;
    private final MedicalRecordService medicalRecordService;

    public DoctorController(CitizenService citizenService, MedicalRecordService medicalRecordService) {
        this.citizenService = citizenService;
        this.medicalRecordService = medicalRecordService;
    }
    @GetMapping("citizen/{nationalId}")
    public ResponseEntity<Citizen> getCitizenByNationalId(@PathVariable
    String nationalId) {
        return ResponseEntity.ok(citizenService.findByNationalId(nationalId));


    }
    @PostMapping("create-medical-record")

    public ResponseEntity<String> createMedicalRecord(@RequestBody CreateMedicalRecordRequest createMedicalRecordRequest) {
        medicalRecordService.createMedicalRecord(createMedicalRecordRequest);
        return ResponseEntity.ok("Done");
    }


}
