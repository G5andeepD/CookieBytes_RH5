package com.cookiebytes.cookiewatch.service;


import com.cookiebytes.cookiewatch.entity.User;

public interface MailService {
    String sendVerificationEmail(User user, String url);

    String sendPasswordResetEmail(User user, String url);
}
