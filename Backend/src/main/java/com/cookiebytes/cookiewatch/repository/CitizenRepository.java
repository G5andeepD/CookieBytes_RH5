package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.Citizen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CitizenRepository extends JpaRepository<Citizen, Integer> {
    Citizen findByNationalId(String nationalId);
}
