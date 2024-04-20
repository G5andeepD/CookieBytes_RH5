package com.cookiebytes.cookiewatch.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Admission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long admissionId;
    private Date admissionDate;
    private Date dischargeDate;

    // Getters and setters
}
