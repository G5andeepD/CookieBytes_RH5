package com.cookiebytes.cookiewatch.repository;


import com.cookiebytes.cookiewatch.entity.User;
import com.cookiebytes.cookiewatch.entity.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {

    VerificationCode findByCode(String code);
    VerificationCode findByUser(User user);
}
