package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseRepository extends JpaRepository<Disease,Long> {
}
