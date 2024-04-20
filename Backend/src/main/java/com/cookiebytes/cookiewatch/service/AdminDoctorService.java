package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.dto.DoctorDTO;
import com.cookiebytes.cookiewatch.dto.CreateDoctorRequest;

import java.util.List;

public interface AdminDoctorService {
    DoctorDTO addDoctor(CreateDoctorRequest createRequest);

    DoctorDTO getDoctor(Integer id);

    DoctorDTO updateDoctor(Integer id, DoctorDTO updateRequest);

    void deleteDoctor(Integer id);

    List<DoctorDTO> listDoctors();
}
