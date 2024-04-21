package com.cookiebytes.cookiewatch.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class LocalClinic extends HealthCentre {
    private String clinicType;

    // Getters and setters
}
