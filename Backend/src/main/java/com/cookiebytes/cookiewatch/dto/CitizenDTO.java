package com.cookiebytes.cookiewatch.dto;

import com.cookiebytes.cookiewatch.util.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CitizenDTO {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String contactNo;
    private Role role;
    private LocalDate dateOfBirth;
    private float height;
    private float weight;
    private String bloodType;
    private boolean enabled;


}