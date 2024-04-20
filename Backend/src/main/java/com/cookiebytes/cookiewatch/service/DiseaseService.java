package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.entity.Disease;

import java.util.List;

public interface DiseaseService {
    Disease createDisease(Disease disease);
    List<Disease> getAllDiseases();
}
