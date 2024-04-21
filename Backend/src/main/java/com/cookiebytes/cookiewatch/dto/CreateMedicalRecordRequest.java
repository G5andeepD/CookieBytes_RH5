package com.cookiebytes.cookiewatch.dto;


import com.cookiebytes.cookiewatch.entity.MedicalRecord;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateMedicalRecordRequest {

    private Long recordId;
    private Date date;
    private Integer doctorId;
    private  Integer citizenId;
    private  Integer healthCentreId;
    private  Integer admissionId;

    private List<PrescriptionRequest> prescriptions;
    private List<Long> diseaseIds;
}
