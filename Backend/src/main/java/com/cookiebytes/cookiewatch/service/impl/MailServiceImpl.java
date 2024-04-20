package com.cookiebytes.cookiewatch.service.impl;


import com.cookiebytes.cookiewatch.entity.User;
import com.cookiebytes.cookiewatch.service.MailService;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService {
    private final JavaMailSender javaMailSender;

    public MailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public String sendVerificationEmail(User user, String url) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("cookiebytes.uop@gmail.com");
        message.setTo(user.getEmail());
        String text = "Hi "+ user.getFirstName() + " " +user.getLastName() +"\n\n"
                + "You’re almost ready to get Onboard with <App Name>" +"\n"
                +"Verify your email address " + url+"\n\n"+
                "Thanks,"+"\n"
                +"<App Name> Team";
        message.setSubject("Verify your Email");
        message.setText(text);
        System.out.println(message);

        javaMailSender.send(message);

        return "Mail sent successfully";
    }
    @Override
    public String sendPasswordResetEmail(User user, String url) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("cookiebytes.uop@gmail.com");
        message.setTo(user.getEmail());

        String text = "Hi " + user.getFirstName() + " " + user.getLastName() + ",\n\n"
                + "You have requested a password reset for your <App Name> account." + "\n"
                + "Please click on the following link to reset your password:\n" + url + "\n\n"
                + "If you didn't initiate this request, you can safely ignore this email.\n\n"
                + "Thanks,\n"
                + "<App Name> Team";

        message.setSubject("Password Reset Request");
        message.setText(text);
        System.out.println(message);

        javaMailSender.send(message);

        return "Password reset email sent successfully";
    }
}
