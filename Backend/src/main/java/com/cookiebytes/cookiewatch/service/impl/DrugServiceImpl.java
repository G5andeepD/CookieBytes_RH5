package com.cookiebytes.cookiewatch.service.impl;

import com.cookiebytes.cookiewatch.entity.Drug;
import com.cookiebytes.cookiewatch.repository.DrugRepository;
import com.cookiebytes.cookiewatch.service.DrugService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DrugServiceImpl implements DrugService {
    private final DrugRepository drugRepository;

    public DrugServiceImpl(DrugRepository drugRepository) {
        this.drugRepository = drugRepository;
    }

    @Override
    public Drug createDrug(Drug drug) {
        return drugRepository.save(drug);
    }

    @Override
    public List<Drug> getAllDrugs() {
        return drugRepository.findAll();
    }
}
