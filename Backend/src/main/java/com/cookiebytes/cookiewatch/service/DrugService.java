package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.entity.Drug;

import java.util.List;

public interface DrugService {
    Drug createDrug(Drug drug);
    List<Drug> getAllDrugs();
}
