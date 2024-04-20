package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.Admission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface AdmissionRepository  extends JpaRepository<Admission, Long> {
}
