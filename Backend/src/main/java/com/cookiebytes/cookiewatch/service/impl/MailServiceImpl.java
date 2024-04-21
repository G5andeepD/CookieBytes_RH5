package com.cookiebytes.cookiewatch.service.impl;


import com.cookiebytes.cookiewatch.entity.Doctor;
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
@Override
    public String sendDoctorVerificationEmail(Doctor doctor) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("cookiebytes.uop@gmail.com");
        message.setTo(doctor.getEmail());

        String text = "Hi " + doctor.getFirstName() + " " + doctor.getLastName() + ",\n\n"
                + "This is the login for your CookieWatch account." + "\n"
                + "Your password is: " + doctor.getPassword() + "\n\n"
                + "Make Sure that you use this password to login for the first time and reset it\n, and also delete this email after you see this.\n\n"
                + "Thanks,\n"
                + "CookieWatch Team";

        message.setSubject("Welcome to CookieWatch");
        message.setText(text);
        System.out.println(message);

        javaMailSender.send(message);

        return "success";

    }

    @Override

    public String sendCommunityComplainReachout(String text, String location) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("cookiebytes.uop@gmail.com");
        message.setTo("wijenayakebuddhi34802@gmail.com");

        // Generate Google Maps URL from location
        String mapsLink = "https://www.google.com/maps/search/?api=1&query=" + location;

        // Determine if it's a community complaint or distress message based on content
        String subject;
        if (text.startsWith("Distress:")) {
            subject = "Urgent Distress Notification";
            text += "\n\nLocation of the incident: " + mapsLink + "\n\nImmediate attention required.";
        } else {
            subject = "Community Complaint";
            text += "\n\nView the complaint location here: " + mapsLink;
        }

        message.setSubject(subject);
        message.setText(text);
        System.out.println(message);

        javaMailSender.send(message);

        return "success";
    }
}
