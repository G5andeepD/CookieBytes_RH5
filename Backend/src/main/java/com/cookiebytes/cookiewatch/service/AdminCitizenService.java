package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.dto.CitizenDTO;
import com.cookiebytes.cookiewatch.dto.CreateCitizenRequest;

import java.util.List;

public interface AdminCitizenService {
    CitizenDTO addCitizen(CreateCitizenRequest createRequest);

    CitizenDTO getCitizen(Integer id);

    CitizenDTO updateCitizen(Integer id, CitizenDTO updateRequest);

    void deleteCitizen(Integer id);

    List<CitizenDTO> listCitizens();
}
