package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
}
