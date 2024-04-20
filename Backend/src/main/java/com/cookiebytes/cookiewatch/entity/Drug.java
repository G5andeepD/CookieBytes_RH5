package com.cookiebytes.cookiewatch.entity;

import jakarta.persistence.*;

@Entity
public class Drug {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long drugId;
    private String name;
    private String description;

    // Getters and setters
}
