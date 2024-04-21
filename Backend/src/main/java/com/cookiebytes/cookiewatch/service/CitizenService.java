package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.entity.Citizen;

public interface CitizenService {
    Citizen findByNationalId (String nationalId);
}


