package com.cookiebytes.cookiewatch.controller;

import com.cookiebytes.cookiewatch.auth.AuthenticationService;
import com.cookiebytes.cookiewatch.dto.CreateMedicalRecordRequest;
import com.cookiebytes.cookiewatch.entity.*;
import com.cookiebytes.cookiewatch.repository.DoctorRepository;
import com.cookiebytes.cookiewatch.repository.UserRepository;
import com.cookiebytes.cookiewatch.service.CitizenService;
import com.cookiebytes.cookiewatch.service.DiseaseService;
import com.cookiebytes.cookiewatch.service.DrugService;
import com.cookiebytes.cookiewatch.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/doctor/")
public class DoctorController {
    @Autowired
    private final CitizenService citizenService;
    private final MedicalRecordService medicalRecordService;
    private final DiseaseService diseaseService;
    private final DrugService drugService;
    private final DoctorRepository doctorRepository;
    @Autowired
    private UserRepository userRepository;

    public DoctorController(CitizenService citizenService, MedicalRecordService medicalRecordService, DiseaseService diseaseService, DrugService drugService, DoctorRepository doctorRepository) {
        this.citizenService = citizenService;
        this.medicalRecordService = medicalRecordService;
        this.diseaseService = diseaseService;
        this.drugService = drugService;
        this.doctorRepository = doctorRepository;
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

    @GetMapping("profile")
    public ResponseEntity<Doctor> getDoctorByEmail() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {


            Optional<User> user = userRepository.findByEmail(authentication.getName());
            System.out.println(authentication.getName());
            Optional<Doctor> doctor = doctorRepository.findById(user.get().getId());
            if (doctor.isPresent()) {
                return ResponseEntity.ok(doctor.get());
            } else {
                return ResponseEntity.notFound().build();
            }
        }
        return ResponseEntity.status(401).body(null);
    }
}
