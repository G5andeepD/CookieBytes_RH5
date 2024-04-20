package com.cookiebytes.cookiewatch.service.impl;
import com.cookiebytes.cookiewatch.dto.HealthCentreDTO;
import com.cookiebytes.cookiewatch.entity.HealthCentre;
import com.cookiebytes.cookiewatch.entity.Hospital;
import com.cookiebytes.cookiewatch.entity.LocalClinic;
import com.cookiebytes.cookiewatch.repository.HealthCentreRepository;
import com.cookiebytes.cookiewatch.service.HealthCentreService;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

@Service
public class HealthCentreServiceImpl implements HealthCentreService {


    private final HealthCentreRepository healthCentreRepository;

    public HealthCentreServiceImpl(HealthCentreRepository healthCentreRepository) {
        this.healthCentreRepository = healthCentreRepository;
    }
    @Override
    public HealthCentre createHealthCentre(HealthCentreDTO healthCentreDTO) {
        HealthCentre healthCentre;


        if ("Hospital".equals(healthCentreDTO.getCentreType())) {
            Hospital hospital = mapToHospital(healthCentreDTO);
            hospital.setName(healthCentreDTO.getName());
            hospital.setAddress(healthCentreDTO.getAddress());
            healthCentre = hospital;
        } else if ("LocalClinic".equals(healthCentreDTO.getCentreType())) {
            LocalClinic localClinic = mapToLocalClinic(healthCentreDTO);
            localClinic.setName(healthCentreDTO.getName());
            localClinic.setAddress(healthCentreDTO.getAddress());
            healthCentre = localClinic;
        } else {
            throw new IllegalArgumentException("Invalid centre type");
        }

        return healthCentreRepository.save(healthCentre);
    }

    @Override
    public List<HealthCentre> getHealthCentres() {
        return healthCentreRepository.findAll();
    }

    private Hospital mapToHospital(HealthCentreDTO dto) {
        Hospital hospital = new Hospital();
        hospital.setName(dto.getName());
        hospital.setAddress(dto.getAddress());
        hospital.setHospitalRating(dto.getHospitalRating());
        hospital.setEmergencyServices(dto.getEmergencyServices());
        return hospital;
    }

    private LocalClinic mapToLocalClinic(HealthCentreDTO dto) {
        LocalClinic localClinic = new LocalClinic();
        localClinic.setName(dto.getName());
        localClinic.setAddress(dto.getAddress());
        localClinic.setClinicType(dto.getClinicType());
        return localClinic;
    }
}
