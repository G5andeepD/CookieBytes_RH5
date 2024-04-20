package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {
}
