package com.cookiebytes.cookiewatch.auth;

import com.cookiebytes.cookiewatch.entity.User;
import com.cookiebytes.cookiewatch.entity.VerificationCode;
import com.cookiebytes.cookiewatch.service.MailService;
import com.cookiebytes.cookiewatch.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/auth")

public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final MailService mailService;
    private final UserService userService;

    public AuthenticationController(AuthenticationService authenticationService, MailService mailService, UserService userService) {
        this.authenticationService = authenticationService;
        this.mailService = mailService;
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest,
                                           HttpServletRequest request) {
        User user;

        try{
            user = authenticationService.register(registerRequest);

        }
        catch (IllegalArgumentException e){
           return ResponseEntity.badRequest().body(e.getMessage());
        }
        String code = UUID.randomUUID().toString();

        mailService.sendVerificationEmail(user,applicationUrl(request,user,code));
        authenticationService.saveVerificationCode(code,user);
        return ResponseEntity.ok().body("Registered Successfully - Verification email sent");


    }

    @GetMapping("/verify-registration")
    public ResponseEntity<?> verifyRegistration(@RequestParam("code") String code) {
        String result = authenticationService.validateVerificationCode(code);

        if (result.equalsIgnoreCase("valid")) {
            // Call authentication service to obtain AuthenticationResponse
            AuthenticationResponse authResponse = authenticationService.getTokensAfterRegistrationVerification(code);
            return ResponseEntity.ok(authResponse);
        } else if (result.equalsIgnoreCase("expired")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Verification link has expired");
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid User");
    }

    @GetMapping("/resend-verify-code")
    public ResponseEntity<String> resendVerificationCode(@RequestParam("email") String email,
                                                         HttpServletRequest request) {
        // Find the user by email
        Optional<User> user = userService.findUserByEmail(email);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        // Generate a new verification code for the user
        VerificationCode verificationCode = authenticationService.generateNewVerificationCode(user.get());
        mailService.sendVerificationEmail(user.get(),applicationUrl(request,user.get(),verificationCode.getCode()));// Call the mail sending method
        return ResponseEntity.ok("Verification Code Resent");
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        authenticationService.refreshToken(request, response);
    }

    private String applicationUrl(HttpServletRequest request,User user,String code) {

        return "http://" +
                request.getServerName() +
                ":" +
                request.getServerPort() +
                request.getContextPath()
                + "/api/v1/auth/verify-registration?code="
                + code;
    }




}


