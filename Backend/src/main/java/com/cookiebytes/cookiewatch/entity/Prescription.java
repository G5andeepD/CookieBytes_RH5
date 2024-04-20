package com.cookiebytes.cookiewatch.entity;
import jakarta.persistence.*;

@Entity
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prescriptionId;
    private String dosage;
    private String frequency;

    @ManyToOne
    @JoinColumn(name = "drugId")
    private Drug drug;

    @ManyToOne
    @JoinColumn(name = "medicalRecordId")
    private MedicalRecord medicalRecord;

    // Getters and setters
}

