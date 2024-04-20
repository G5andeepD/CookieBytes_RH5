package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
}
