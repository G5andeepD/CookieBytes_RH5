package com.cookiebytes.cookiewatch.service.impl;

import com.cookiebytes.cookiewatch.entity.Disease;
import com.cookiebytes.cookiewatch.repository.DiseaseRepository;
import com.cookiebytes.cookiewatch.service.DiseaseService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DiseaseServiceImpl implements DiseaseService {
    private final DiseaseRepository diseaseRepository;

    public DiseaseServiceImpl(DiseaseRepository diseaseRepository) {
        this.diseaseRepository = diseaseRepository;
    }

    @Override
    public Disease createDisease(Disease disease) {
        return diseaseRepository.save(disease);
    }

    @Override
    public List<Disease> getAllDiseases() {
        return diseaseRepository.findAll();
    }
}
