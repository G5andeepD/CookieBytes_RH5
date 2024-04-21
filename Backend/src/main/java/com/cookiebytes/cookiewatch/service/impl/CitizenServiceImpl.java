package com.cookiebytes.cookiewatch.service.impl;

import com.cookiebytes.cookiewatch.entity.Citizen;
import com.cookiebytes.cookiewatch.repository.CitizenRepository;
import com.cookiebytes.cookiewatch.service.CitizenService;
import org.springframework.stereotype.Service;

@Service
public class CitizenServiceImpl implements CitizenService {

    private final CitizenRepository citizenRepository;

    public CitizenServiceImpl(CitizenRepository citizenRepository) {
        this.citizenRepository = citizenRepository;
    }

    @Override
    public Citizen findByNationalId(String nationalId) {
        return citizenRepository.findByNationalId(nationalId);
    }
}
