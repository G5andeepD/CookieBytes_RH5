package com.cookiebytes.cookiewatch.controller;

import com.cookiebytes.cookiewatch.dto.HealthCentreDTO;
import com.cookiebytes.cookiewatch.entity.HealthCentre;
import com.cookiebytes.cookiewatch.service.HealthCentreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/admin/health-centre")
public class AdminHealthCentreController {

    private final HealthCentreService healthCentreService;

    public AdminHealthCentreController(HealthCentreService healthCentreService) {
        this.healthCentreService = healthCentreService;
    }

    @PostMapping
    public ResponseEntity<?> createHealthCentre(@RequestBody HealthCentreDTO healthCentreDTO) {
        HealthCentre healthCentre = healthCentreService.createHealthCentre(healthCentreDTO);
        return ResponseEntity.ok(healthCentre);
        //return ResponseEntity.ok("Great");
    }


}
