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
public class Diagnosis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "medicalRecordId")
    private MedicalRecord medicalRecord;

    @ManyToOne
    @JoinColumn(name = "diseaseId")
    private Disease disease;

}
