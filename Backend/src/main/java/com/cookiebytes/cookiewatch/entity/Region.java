package com.cookiebytes.cookiewatch.entity;

import jakarta.persistence.*;

@Entity
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long regionId;
    private String name;
    private int population;

    @OneToOne
    @JoinColumn(name = "phiId")
    private PHI phi;

    // Getters and setters
}
