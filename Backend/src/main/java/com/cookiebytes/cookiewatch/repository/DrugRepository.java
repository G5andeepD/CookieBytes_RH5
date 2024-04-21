package com.cookiebytes.cookiewatch.repository;

import com.cookiebytes.cookiewatch.entity.Drug;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrugRepository extends JpaRepository<Drug,Long> {
}
