package com.cookiebytes.cookiewatch.service.impl;

import com.cookiebytes.cookiewatch.dto.PHIDTO;
import com.cookiebytes.cookiewatch.repository.PHIRepository;
import com.cookiebytes.cookiewatch.entity.PHI;
import com.cookiebytes.cookiewatch.service.AdminPHIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminPHIServiceImpl implements AdminPHIService {

    @Autowired
    private PHIRepository phiRepository;

    @Override
    @Transactional
    public PHIDTO addPHI(PHIDTO phiDTO) {
        PHI phi = new PHI();
        phi.setFirstName(phiDTO.getFirstName());
        phi.setLastName(phiDTO.getLastName());
        phi.setEmail(phiDTO.getEmail());
        phi.setContactNo(phiDTO.getContactNo());
        phi.setRegistrationId(phiDTO.getRegistrationId());
        phi.setEnabled(phiDTO.isEnabled());
        return mapToPHIDTO(phiRepository.save(phi));
    }

    @Override
    public PHIDTO getPHI(Integer id) {
        PHI phi = phiRepository.findById(id).orElseThrow(() -> new RuntimeException("PHI not found"));
        return mapToPHIDTO(phi);
    }

    @Override
    @Transactional
    public PHIDTO updatePHI(Integer id, PHIDTO phiDTO) {
        PHI phi = phiRepository.findById(id).orElseThrow(() -> new RuntimeException("PHI not found"));
        phi.setRegistrationId(phiDTO.getRegistrationId());
        // Update other fields as needed
        return mapToPHIDTO(phiRepository.save(phi));
    }

    @Override
    public void deletePHI(Integer id) {
        phiRepository.deleteById(id);
    }

    @Override
    public List<PHIDTO> listPHIs() {
        return phiRepository.findAll().stream().map(this::mapToPHIDTO).collect(Collectors.toList());
    }

    private PHIDTO mapToPHIDTO(PHI phi) {
        PHIDTO dto = new PHIDTO();
        dto.setId(phi.getId());
        dto.setFirstName(phi.getFirstName());
        dto.setLastName(phi.getLastName());
        dto.setEmail(phi.getEmail());
        dto.setContactNo(phi.getContactNo());
        dto.setRegistrationId(phi.getRegistrationId());
        dto.setEnabled(phi.isEnabled());
        return dto;
    }
}
