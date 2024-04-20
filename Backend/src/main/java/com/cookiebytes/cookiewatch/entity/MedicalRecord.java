package com.cookiebytes.cookiewatch.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recordId;
    private Date date;

    @ManyToOne
    @JoinColumn(name = "doctorId")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "citizenId")
    private Citizen citizen;

    @ManyToOne
    @JoinColumn(name = "healthCentreId")
    private HealthCentre healthCentre;

    @ManyToOne
    private Admission admission;

    // Getters and setters
}
