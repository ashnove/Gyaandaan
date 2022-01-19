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
public class VolunteerStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long volunteerStatusId;
    Long volunteerId;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date volunteerStatusTimestamp;

    @PrePersist
    private void onCreate() {
        volunteerStatusTimestamp = new Date();
    }

    public VolunteerStatus() {
    }

    public Long getVolunteerStatusId() {
        return volunteerStatusId;
    }

    public void setVolunteerStatusId(Long volunteerStatusId) {
        this.volunteerStatusId = volunteerStatusId;
    }

    public Long getVolunteerId() {
        return volunteerId;
    }

    public void setVolunteerId(Long volunteerId) {
        this.volunteerId = volunteerId;
    }

    public Date getVolunteerStatusTimestamp() {
        return volunteerStatusTimestamp;
    }

    public void setVolunteerStatusTimestamp(Date volunteerStatusTimestamp) {
        this.volunteerStatusTimestamp = volunteerStatusTimestamp;
    }

    @Override
    public String toString() {
        return "VolunteerStatus [volunteerId=" + volunteerId + ", volunteerStatusId=" + volunteerStatusId
                + ", volunteerStatusTimestamp=" + volunteerStatusTimestamp + "]";
    }
    
}
