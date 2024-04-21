package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    Doctor findByEmail(String email);


}
