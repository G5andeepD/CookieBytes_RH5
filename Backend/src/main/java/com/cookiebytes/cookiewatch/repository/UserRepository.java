package com.cookiebytes.cookiewatch.repository;


import com.cookiebytes.cookiewatch.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String userEmail);
    boolean existsByEmail(String userEmail);
}
