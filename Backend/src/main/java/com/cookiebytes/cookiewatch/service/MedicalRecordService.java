package com.cookiebytes.cookiewatch.service;

import com.cookiebytes.cookiewatch.dto.CreateMedicalRecordRequest;
import com.cookiebytes.cookiewatch.entity.MedicalRecord;

public interface MedicalRecordService {
    MedicalRecord createMedicalRecord(CreateMedicalRecordRequest createMedicalRecordRequest);
}
