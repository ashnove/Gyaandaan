package com.gydn.gyandaan.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class StudentRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long requestId;
    private Long studentId;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date studentRequestTimestamp;

    @PrePersist
    private void onCreate() {
        studentRequestTimestamp = new Date();
    }
    
}