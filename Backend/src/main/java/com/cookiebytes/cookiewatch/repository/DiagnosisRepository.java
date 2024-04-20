package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.Diagnosis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiagnosisRepository extends JpaRepository<Diagnosis, Long> {
}
