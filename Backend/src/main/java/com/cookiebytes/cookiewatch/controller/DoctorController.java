package com.cookiebytes.cookiewatch.controller;

import com.cookiebytes.cookiewatch.dto.CreateMedicalRecordRequest;
import com.cookiebytes.cookiewatch.entity.Citizen;
import com.cookiebytes.cookiewatch.entity.Disease;
import com.cookiebytes.cookiewatch.entity.Drug;
import com.cookiebytes.cookiewatch.service.CitizenService;
import com.cookiebytes.cookiewatch.service.DiseaseService;
import com.cookiebytes.cookiewatch.service.DrugService;
import com.cookiebytes.cookiewatch.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/doctor/")
public class DoctorController {
    @Autowired
    private final CitizenService citizenService;
    private final MedicalRecordService medicalRecordService;
    private final DiseaseService diseaseService;
    private final DrugService drugService;

    public DoctorController(CitizenService citizenService, MedicalRecordService medicalRecordService, DiseaseService diseaseService, DrugService drugService) {
        this.citizenService = citizenService;
        this.medicalRecordService = medicalRecordService;
        this.diseaseService = diseaseService;
        this.drugService = drugService;
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

    @GetMapping("drug")
    ResponseEntity<List<Drug>> getAllDrugs(){
        return ResponseEntity.ok(drugService.getAllDrugs());
    }

    @GetMapping("disease")
    ResponseEntity<List<Disease>>  getAllDiseases(){
        return  ResponseEntity.ok(diseaseService.getAllDiseases());
    }


}
