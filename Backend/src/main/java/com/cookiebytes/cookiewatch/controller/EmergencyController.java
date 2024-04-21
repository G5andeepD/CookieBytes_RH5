package com.cookiebytes.cookiewatch.controller;

import com.cookiebytes.cookiewatch.dto.CommunityReachout;
import com.cookiebytes.cookiewatch.service.MailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/emergency")
public class EmergencyController {

    private final MailService mailService;

    public EmergencyController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping("/signal")
    public ResponseEntity<String> emergency(@RequestBody CommunityReachout communityReachout) {
        mailService.sendCommunityComplainReachout(communityReachout.getText(),communityReachout.getLocation());
        return ResponseEntity.ok("Success");
    }


}
