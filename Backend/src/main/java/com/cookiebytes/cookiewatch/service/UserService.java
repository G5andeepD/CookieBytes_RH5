package com.cookiebytes.cookiewatch.service;


import com.cookiebytes.cookiewatch.entity.User;

import java.util.Optional;

public interface UserService {

    void changePassword(String userEmail, String currentPassword, String newPassword);

    Optional<User> findUserByEmail(String email);
}
