package com.cookiebytes.cookiewatch.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class HealthCentre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer centreId;
    private String name;
    private String address;
    private String type;

    // Getters and setters
}

