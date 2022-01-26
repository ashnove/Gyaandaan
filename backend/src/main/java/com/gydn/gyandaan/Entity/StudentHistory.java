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
public class StudentHistory {
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
    
    public StudentHistory() {
    }
    
    public StudentHistory(Long studentId) {
        this.studentId = studentId;
    }

    public Long getRequestId() {
        return requestId;
    }

    public void setRequestId(Long requestId) {
        this.requestId = requestId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Date getStudentRequestTimestamp() {
        return studentRequestTimestamp;
    }

    public void setStudentRequestTimestamp(Date studentRequestTimestamp) {
        this.studentRequestTimestamp = studentRequestTimestamp;
    }

    @Override
    public String toString() {
        return "StudentHistory [requestId=" + requestId + ", studentId=" + studentId + ", studentRequestTimestamp="
                + studentRequestTimestamp + "]";
    }
    
    
}