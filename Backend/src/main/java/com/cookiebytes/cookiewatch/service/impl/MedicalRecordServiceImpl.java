package com.cookiebytes.cookiewatch.service.impl;

import com.cookiebytes.cookiewatch.dto.CreateMedicalRecordRequest;
import com.cookiebytes.cookiewatch.dto.PrescriptionRequest;
import com.cookiebytes.cookiewatch.entity.*;
import com.cookiebytes.cookiewatch.repository.*;
import com.cookiebytes.cookiewatch.service.MedicalRecordService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class MedicalRecordServiceImpl implements MedicalRecordService {
    private final MedicalRecordRepository medicalRecordRepository;
    private final DoctorRepository doctorRepository;
    private final CitizenRepository citizenRepository;
    private final AdmissionRepository admissionRepository;
    private final HealthCentreRepository healthCentreRepository;
    private final PrescriptionRepository prescriptionRepository;
    private final DiagnosisRepository diagnosisRepository;
    private final DiseaseRepository diseaseRepository;
    private final DrugRepository drugRepository;
    public MedicalRecordServiceImpl(MedicalRecordRepository medicalRecordRepository, DoctorRepository doctorRepository, CitizenRepository citizenRepository, AdmissionRepository admissionRepository, HealthCentreRepository healthCentreRepository, PrescriptionRepository prescriptionRepository, DiagnosisRepository diagnosisRepository, DiseaseRepository diseaseRepository, DrugRepository drugRepository) {
        this.medicalRecordRepository = medicalRecordRepository;
        this.doctorRepository = doctorRepository;
        this.citizenRepository = citizenRepository;
        this.admissionRepository = admissionRepository;
        this.healthCentreRepository = healthCentreRepository;
        this.prescriptionRepository = prescriptionRepository;
        this.diagnosisRepository = diagnosisRepository;
        this.diseaseRepository = diseaseRepository;
        this.drugRepository = drugRepository;
    }

    @Override
    @Transactional
    public MedicalRecord createMedicalRecord(CreateMedicalRecordRequest createMedicalRecordRequest) {
        Optional<Doctor> doctor = doctorRepository.findById(createMedicalRecordRequest.getDoctorId());
        Optional<Citizen> citizen = citizenRepository.findById(createMedicalRecordRequest.getCitizenId());
        Optional<Admission> admission = admissionRepository.findById(Long.valueOf(createMedicalRecordRequest.getAdmissionId()));
        Optional<HealthCentre> healthCentre = healthCentreRepository.findById(createMedicalRecordRequest.getHealthCentreId());

        MedicalRecord record = new MedicalRecord();
        record.setDate(createMedicalRecordRequest.getDate());
        // Set doctor if present, else set to null
        record.setDoctor(doctor.orElse(null));

// Set citizen if present, else set to null
        record.setCitizen(citizen.orElse(null));

// Set admission if present, else set to null
        record.setAdmission(admission.orElse(null));

// Set health centre if present, else set to null
        record.setHealthCentre(healthCentre.orElse(null));

        MedicalRecord savedMedicalRecord = medicalRecordRepository.save(record);

        // Handle prescriptions
        if (createMedicalRecordRequest.getPrescriptions() != null) {
            for (PrescriptionRequest prescriptionRequest : createMedicalRecordRequest.getPrescriptions()) {
                Optional<Drug> drug = drugRepository.findById(Long.valueOf(prescriptionRequest.getDrugId()));
                if (drug.isPresent()) {
                    Prescription prescription = new Prescription();
                    prescription.setDrug(drug.get());
                    prescription.setMedicalRecord(savedMedicalRecord);
                    prescription.setStartDate(prescriptionRequest.getStartDate());
                    prescription.setEndDate(prescriptionRequest.getEndDate());
                    prescription.setMorning(prescriptionRequest.isMorning());
                    prescription.setAfternoon(prescriptionRequest.isAfternoon());
                    prescription.setEvening(prescriptionRequest.isEvening());
                    prescription.setNight(prescriptionRequest.isNight());

                    prescriptionRepository.save(prescription);
                }
            }
        }

        // Handle diseaseIds
        if (createMedicalRecordRequest.getDiseaseIds() != null) {
            for (Long diseaseId : createMedicalRecordRequest.getDiseaseIds()) {
                Optional<Disease> disease = diseaseRepository.findById(diseaseId);
                if (disease.isPresent()) {
                    Diagnosis diagnosis = new Diagnosis();
                    diagnosis.setMedicalRecord(savedMedicalRecord);
                    diagnosis.setDisease(disease.get());
                    diagnosisRepository.save(diagnosis);
                }
            }
        }

        return savedMedicalRecord;
    }
}
