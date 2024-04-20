package com.cookiebytes.cookiewatch.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrescriptionRequest{
    private Integer drugId;
    private Date startDate;
    private Date endDate;

    private boolean morning;
    private boolean afternoon;
    private boolean evening;
    private boolean night;

}