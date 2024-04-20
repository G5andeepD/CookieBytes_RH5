package com.cookiebytes.cookiewatch.entity;
import jakarta.persistence.*;

@Entity
public class Risk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long riskId;
    private String description;

    // Getters and setters
}
