package com.cookiebytes.cookiewatch.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class HealthCentreDTO {
    private String name;
    private String address;
    private String centreType; // "Hospital" or "LocalClinic"
    private String hospitalRating; // Specific for hospitals
    private Boolean emergencyServices; // Specific for hospitals
    private String clinicType; // Specific for local clinics

    // Getters and Setters
}

