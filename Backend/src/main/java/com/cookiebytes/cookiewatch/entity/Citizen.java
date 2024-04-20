package com.cookiebytes.cookiewatch.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Citizen extends User {

    private LocalDate dateOfBirth;
    private float height;
    private float weight;
    private String bloodType;

}
