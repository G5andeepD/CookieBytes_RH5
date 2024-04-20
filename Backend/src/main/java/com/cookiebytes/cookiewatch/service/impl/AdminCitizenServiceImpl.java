package com.cookiebytes.cookiewatch.service.impl;
import com.cookiebytes.cookiewatch.dto.CreateCitizenRequest;
import com.cookiebytes.cookiewatch.dto.CitizenDTO;

import com.cookiebytes.cookiewatch.repository.CitizenRepository;
import com.cookiebytes.cookiewatch.entity.Citizen;
import com.cookiebytes.cookiewatch.service.AdminCitizenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminCitizenServiceImpl implements AdminCitizenService {

    private final CitizenRepository citizenRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AdminCitizenServiceImpl(CitizenRepository citizenRepository, PasswordEncoder passwordEncoder) {
        this.citizenRepository = citizenRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public CitizenDTO addCitizen(CreateCitizenRequest createRequest) {
        Citizen citizen = new Citizen();
        // Assuming setters are defined to set properties from CreateCitizenRequest to Citizen
        populateCitizenFromRequest(citizen, createRequest);
        citizen.setPassword(passwordEncoder.encode(citizen.getPassword()));
        citizen = citizenRepository.save(citizen);
        return mapToCitizenResponse(citizen);
    }

    @Override
    public CitizenDTO getCitizen(Integer id) {
        Citizen citizen = citizenRepository.findById(id).orElseThrow(() -> new RuntimeException("Citizen not found"));
        return mapToCitizenResponse(citizen);
    }

    @Override
    @Transactional
    public CitizenDTO updateCitizen(Integer id, CitizenDTO updateRequest) {
        Citizen citizen = citizenRepository.findById(id).orElseThrow(() -> new RuntimeException("Citizen not found"));
        // Assuming setters are defined to update properties from UpdateCitizenRequest to Citizen
        populateCitizenFromUpdateRequest(citizen, updateRequest);
        citizen = citizenRepository.save(citizen);
        return mapToCitizenResponse(citizen);
    }

    @Override
    public void deleteCitizen(Integer id) {
        citizenRepository.deleteById(id);
    }

    @Override
    public List<CitizenDTO> listCitizens() {
        return citizenRepository.findAll().stream().map(this::mapToCitizenResponse).collect(Collectors.toList());
    }

    private void populateCitizenFromRequest(Citizen citizen, CreateCitizenRequest request) {
        System.out.println("Mapping is Happening");
        citizen.setFirstName(request.getFirstName());
        citizen.setLastName(request.getLastName());
        citizen.setEmail(request.getEmail());
        citizen.setPassword(request.getPassword());
        citizen.setNationalId(request.getNationalId());
        citizen.setContactNo(request.getContactNo());
        citizen.setRole(request.getRole());
        citizen.setDateOfBirth(request.getDateOfBirth());
        citizen.setHeight(request.getHeight());
        citizen.setWeight(request.getWeight());
        citizen.setBloodType(request.getBloodType());
        citizen.setLatitude(request.getLattitude());
        citizen.setLongitude(request.getLongitude());
    }
    private void populateCitizenFromUpdateRequest(Citizen citizen, CitizenDTO request) {
        citizen.setFirstName(request.getFirstName());
        citizen.setLastName(request.getLastName());
        citizen.setEmail(request.getEmail());

        citizen.setContactNo(request.getContactNo());
        citizen.setRole(request.getRole());
        citizen.setDateOfBirth(request.getDateOfBirth());
        citizen.setHeight(request.getHeight());
        citizen.setWeight(request.getWeight());
        citizen.setBloodType(request.getBloodType());
        citizen.setLatitude(request.getLatitude());
        citizen.setLongitude(request.getLongitude());
    }

    private CitizenDTO mapToCitizenResponse(Citizen citizen) {
        CitizenDTO response = new CitizenDTO();
        response.setId(citizen.getId());
        response.setFirstName(citizen.getFirstName());
        response.setLastName(citizen.getLastName());
        response.setEmail(citizen.getEmail());
        response.setContactNo(citizen.getContactNo());
        response.setRole(citizen.getRole());
        response.setDateOfBirth(citizen.getDateOfBirth());
        response.setHeight(citizen.getHeight());
        response.setWeight(citizen.getWeight());
        response.setBloodType(citizen.getBloodType());
        response.setEnabled(citizen.isEnabled());
        response.setLatitude(citizen.getLatitude());
        response.setLongitude(citizen.getLongitude());
        return response;
    }
}
