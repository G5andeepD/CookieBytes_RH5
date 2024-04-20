package com.cookiebytes.cookiewatch.controller;

import com.cookiebytes.cookiewatch.dto.DrugDTO;
import com.cookiebytes.cookiewatch.entity.Disease;
import com.cookiebytes.cookiewatch.entity.Drug;
import com.cookiebytes.cookiewatch.service.DiseaseService;
import com.cookiebytes.cookiewatch.service.DrugService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/admin/other/")
public class AdminGeneralController {
    private final DiseaseService diseaseService;
    private final DrugService drugservice;

    public AdminGeneralController(DiseaseService diseaseService, DrugService drugservice) {
        this.diseaseService = diseaseService;
        this.drugservice = drugservice;
    }

    @PostMapping("drug")
    ResponseEntity<Drug> createDrug(@RequestBody Drug drug){
        return ResponseEntity.ok(drugservice.createDrug(drug));
    }


   @PostMapping("disease")
    ResponseEntity<Disease> createDisease(@RequestBody Disease disease){
        return ResponseEntity.ok(diseaseService.createDisease(disease));

   }

   @GetMapping("drug")
    ResponseEntity<List<Drug>> getAllDrugs(){
        return ResponseEntity.ok(drugservice.getAllDrugs());
   }

   @GetMapping("disease")
    ResponseEntity<List<Disease>>  getAllDiseases(){
        return  ResponseEntity.ok(diseaseService.getAllDiseases());
   }



}
