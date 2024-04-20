package com.cookiebytes.cookiewatch.controller;

import com.cookiebytes.cookiewatch.dto.CitizenDTO;
import com.cookiebytes.cookiewatch.dto.CreateCitizenRequest;
import com.cookiebytes.cookiewatch.service.AdminCitizenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("api/v1/admin/citizen")
public class AdminCitizenController {
    private final AdminCitizenService adminCitizenService;

    @Autowired
    public AdminCitizenController(AdminCitizenService adminCitizenService) {
        this.adminCitizenService = adminCitizenService;
    }

    @PostMapping
    public ResponseEntity<String> addCitizen(@RequestBody CreateCitizenRequest citizenRequest) {
        CitizenDTO response = adminCitizenService.addCitizen(citizenRequest);
        return ResponseEntity.ok("Citizen created with ID: " + response.getId());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CitizenDTO> getCitizen(@PathVariable Integer id) {
        CitizenDTO response = adminCitizenService.getCitizen(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCitizen(@PathVariable Integer id, @RequestBody CitizenDTO citizenDTO) {
        citizenDTO.setId(id);
        adminCitizenService.updateCitizen(id,citizenDTO);
        return ResponseEntity.ok("Citizen updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCitizen(@PathVariable Integer id) {
        adminCitizenService.deleteCitizen(id);
        return ResponseEntity.ok("Citizen deleted successfully");
    }

    @GetMapping("/list")
    public ResponseEntity<List<CitizenDTO>> listCitizens() {
        List<CitizenDTO> citizens = adminCitizenService.listCitizens();
        return ResponseEntity.ok(citizens);
    }
}

