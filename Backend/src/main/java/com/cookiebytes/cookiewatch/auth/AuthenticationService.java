package com.cookiebytes.cookiewatch.auth;


import com.cookiebytes.cookiewatch.config.JwtService;
import com.cookiebytes.cookiewatch.entity.Token;
import com.cookiebytes.cookiewatch.entity.User;
import com.cookiebytes.cookiewatch.entity.VerificationCode;
import com.cookiebytes.cookiewatch.repository.TokenRepository;
import com.cookiebytes.cookiewatch.repository.UserRepository;
import com.cookiebytes.cookiewatch.repository.VerificationCodeRepository;
import com.cookiebytes.cookiewatch.util.Role;
import com.cookiebytes.cookiewatch.util.TokenType;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Calendar;
import java.util.UUID;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final VerificationCodeRepository verificationCodeRepository;
    private final JwtService jwtService;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;


    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, VerificationCodeRepository verificationCodeRepository, JwtService jwtService, TokenRepository tokenRepository, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.verificationCodeRepository = verificationCodeRepository;
        this.jwtService = jwtService;
        this.tokenRepository = tokenRepository;
        this.authenticationManager = authenticationManager;
    }

    public User register(RegisterRequest registerRequest) {
    if (userRepository.existsByEmail(registerRequest.getEmail())) {
        throw new IllegalArgumentException("User with this email already exists");
    }
    var user = User.builder()
            .firstName(registerRequest.getFirstname())
            .lastName(registerRequest.getLastname())
            .email(registerRequest.getEmail())
            .password(passwordEncoder.encode(registerRequest.getPassword()))
            .role(Role.USER)
            .enabled(false)
            .build();

        return userRepository.save(user);

    }

    public void saveVerificationCode(String code, User user) {
        VerificationCode verificationCode = new VerificationCode(user,code);
        verificationCodeRepository.save(verificationCode);

    }

    public String validateVerificationCode(String code) {
        VerificationCode verificationCode = verificationCodeRepository.findByCode(code);

        if(verificationCode == null ){
            return "invalid";

        }
        User user = verificationCode.getUser();
        Calendar cal = Calendar.getInstance();

        if ((verificationCode.getExpirationTime().getTime()
                - cal.getTime().getTime()) <= 0) {
            verificationCodeRepository.delete(verificationCode);
            return "expired";
        }

        user.setEnabled(true);
        userRepository.save(user);
        return "valid";
    }

    public AuthenticationResponse getTokensAfterRegistrationVerification(String code) {
        VerificationCode verificationCode = verificationCodeRepository.findByCode(code);
        User user = verificationCode.getUser();

        String jwtToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(user,jwtToken);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .role(user.getRole())
                .build();

    }
    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        System.out.println(request.getEmail());
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();


        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .role(user.getRole())
                .build();
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(refreshToken);
        if (userEmail != null) {
            var user = userRepository.findByEmail(userEmail)
                    .orElseThrow();
            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .role(user.getRole())
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }

    public VerificationCode generateNewVerificationCode(User user) {
        VerificationCode verificationCode = verificationCodeRepository.findByUser(user);
        verificationCode.setCode(UUID.randomUUID().toString());
        verificationCodeRepository.save(verificationCode);
        return verificationCode;
    }
}
