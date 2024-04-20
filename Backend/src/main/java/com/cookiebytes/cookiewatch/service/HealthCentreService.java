package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.dto.HealthCentreDTO;
import com.cookiebytes.cookiewatch.entity.HealthCentre;

import java.util.List;

public interface HealthCentreService {



   HealthCentre createHealthCentre(HealthCentreDTO healthCentreDTO);
   List<HealthCentre> getHealthCentres();

}
