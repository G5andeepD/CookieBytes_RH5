package com.cookiebytes.cookiewatch.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateDoctorRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String contactNo;
    private String licenseNo;
    private String specialty;
}
