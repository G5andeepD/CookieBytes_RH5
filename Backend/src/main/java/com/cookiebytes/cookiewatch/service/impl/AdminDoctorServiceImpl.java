package com.cookiebytes.cookiewatch.service.impl;

import com.cookiebytes.cookiewatch.dto.CreateDoctorRequest;
import com.cookiebytes.cookiewatch.dto.DoctorDTO;
import com.cookiebytes.cookiewatch.entity.Doctor;
import com.cookiebytes.cookiewatch.repository.DoctorRepository;
import com.cookiebytes.cookiewatch.service.AdminDoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminDoctorServiceImpl implements AdminDoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    @Transactional
    public DoctorDTO addDoctor(CreateDoctorRequest createRequest) {
        Doctor doctor = new Doctor();
        doctor.setFirstName(createRequest.getFirstName());
        doctor.setLastName(createRequest.getLastName());
        doctor.setEmail(createRequest.getEmail());
        doctor.setContactNo(createRequest.getContactNo());
        doctor.setLicenseNo(createRequest.getLicenseNo());
        doctor.setSpeciality(createRequest.getSpecialty());
        return mapToDoctorDTO(doctorRepository.save(doctor));
    }

    @Override
    public DoctorDTO getDoctor(Integer id) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() -> new RuntimeException("Doctor not found"));
        return mapToDoctorDTO(doctor);
    }

    @Override
    @Transactional
    public DoctorDTO updateDoctor(Integer id, DoctorDTO updateRequest) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow(() -> new RuntimeException("Doctor not found"));
        doctor.setLicenseNo(updateRequest.getLicenseNo());
        doctor.setSpeciality(updateRequest.getSpecialty());
        return mapToDoctorDTO(doctorRepository.save(doctor));
    }

    @Override
    public void deleteDoctor(Integer id) {
        doctorRepository.deleteById(id);
    }

    @Override
    public List<DoctorDTO> listDoctors() {
        return doctorRepository.findAll().stream().map(this::mapToDoctorDTO).collect(Collectors.toList());
    }

    private DoctorDTO mapToDoctorDTO(Doctor doctor) {
        DoctorDTO dto = new DoctorDTO();
        dto.setId(doctor.getId());
        dto.setFirstName(doctor.getFirstName());
        dto.setLastName(doctor.getLastName());
        dto.setEmail(doctor.getEmail());
        dto.setContactNo(doctor.getContactNo());
        dto.setLicenseNo(doctor.getLicenseNo());
        dto.setSpecialty(doctor.getSpeciality());
        return dto;
    }
}
