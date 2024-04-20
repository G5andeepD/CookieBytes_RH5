package com.cookiebytes.cookiewatch.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PHIDTO {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String contactNo;
    private String registrationId;
    private boolean enabled;
}
