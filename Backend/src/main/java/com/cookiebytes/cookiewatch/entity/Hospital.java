package com.cookiebytes.cookiewatch.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Hospital extends HealthCentre {
    private String hospitalRating;
    private Boolean emergencyServices;

    // Getters and setters
}

