package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.dto.PHIDTO;

import java.util.List;

public interface AdminPHIService {
    PHIDTO addPHI(PHIDTO phiDTO);

    PHIDTO getPHI(Integer id);

    PHIDTO updatePHI(Integer id, PHIDTO phiDTO);

    void deletePHI(Integer id);

    List<PHIDTO> listPHIs();
}
