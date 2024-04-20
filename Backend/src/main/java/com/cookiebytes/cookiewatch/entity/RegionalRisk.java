package com.cookiebytes.cookiewatch.entity;

import jakarta.persistence.*;

@Entity
public class RegionalRisk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long regionalRiskId;

    @ManyToOne
    @JoinColumn(name = "regionId")
    private Region region;

    @ManyToOne
    @JoinColumn(name = "riskId")
    private Risk risk;

    private String levelOfRisk;

    // Getters and setters
}

