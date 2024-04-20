package com.cookiebytes.cookiewatch.controller;

import com.cookiebytes.cookiewatch.dto.PHIDTO;
import com.cookiebytes.cookiewatch.service.AdminPHIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("api/v1/admin/phi")
public class AdminPHIController {
    private final AdminPHIService adminPHIService;

    @Autowired
    public AdminPHIController(AdminPHIService adminPHIService) {
        this.adminPHIService = adminPHIService;
    }

    @PostMapping
    public ResponseEntity<String> addPHI(@RequestBody PHIDTO phiDTO) {
        PHIDTO response = adminPHIService.addPHI(phiDTO);
        return ResponseEntity.ok("PHI created with ID: " + response.getId());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PHIDTO> getPHI(@PathVariable Integer id) {
        PHIDTO response = adminPHIService.getPHI(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updatePHI(@PathVariable Integer id, @RequestBody PHIDTO phiDTO) {
        PHIDTO updatedPHI = adminPHIService.updatePHI(id, phiDTO);
        return ResponseEntity.ok("PHI updated with ID: " + updatedPHI.getId());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePHI(@PathVariable Integer id) {
        adminPHIService.deletePHI(id);
        return ResponseEntity.ok("PHI deleted with ID: " + id);
    }

    @GetMapping
    public ResponseEntity<List<PHIDTO>> getAllPHI() {
        List<PHIDTO> phis = adminPHIService.listPHIs();
        return ResponseEntity.ok(phis);
    }
}
