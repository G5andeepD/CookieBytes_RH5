package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.entity.Risk;

import java.util.List;

public interface RiskService {
    Risk createRisk(Risk risk);
    List<Risk> getAllRisks();
}
