package com.gydn.gyandaan.Entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.PrePersist;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
public class Volunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long volunteerId;
    private String volunteerUsername;
    private String volunteerFirstname;
    private String volunteerLastname;
    private String volunteerEmail;
    private Long volunteerContact;
    private Boolean volunteerIsAvailable;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date volunteerTimestamp;

    @PrePersist
    private void onCreate() {
        volunteerTimestamp = new Date();
    }

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "volunteer_topics",
        joinColumns = { @JoinColumn(name = "volunteer_id") },
        inverseJoinColumns = { @JoinColumn(name = "topic_id") })
    @JsonIgnoreProperties({"students","volunteers"})
    private Set<Topic> topics = new HashSet<>();

    public Volunteer () {

    }
    
    public Volunteer(Long volunteerId, String volunteerUsername, Boolean volunteerIsAvailable) {
        this.volunteerId = volunteerId;
        this.volunteerUsername = volunteerUsername;
        this.volunteerIsAvailable = volunteerIsAvailable;
    }

    public String getVolunteerEmail() {
        return volunteerEmail;
    }

    public void setVolunteerEmail(String volunteerEmail) {
        this.volunteerEmail = volunteerEmail;
    }

    public Long getVolunteerId() {
        return volunteerId;
    }

    public void setVolunteerId(Long volunteerId) {
        this.volunteerId = volunteerId;
    }

    public String getVolunteerUsername() {
        return volunteerUsername;
    }

    public void setVolunteerUsername(String volunteerUsername) {
        this.volunteerUsername = volunteerUsername;
    }

    public String getVolunteerFirstname() {
        return volunteerFirstname;
    }

    public void setVolunteerFirstname(String volunteerFirstname) {
        this.volunteerFirstname = volunteerFirstname;
    }

    public String getVolunteerLastname() {
        return volunteerLastname;
    }

    public void setVolunteerLastname(String volunteerLastname) {
        this.volunteerLastname = volunteerLastname;
    }

    public Long getVolunteerContact() {
        return volunteerContact;
    }

    public void setVolunteerContact(Long volunteerContact) {
        this.volunteerContact = volunteerContact;
    }

    public Boolean getVolunteerIsAvailable() {
        return volunteerIsAvailable;
    }

    public void setVolunteerIsAvailable(Boolean volunteerIsAvailable) {
        this.volunteerIsAvailable = volunteerIsAvailable;
    }

    public Date getVolunteerTimestamp() {
        return volunteerTimestamp;
    }

    public void setVolunteerTimestamp(Date volunteerTimestamp) {
        this.volunteerTimestamp = volunteerTimestamp;
    }

    public Set<Topic> getTopics() {
        return topics;
    }

    public void setTopics(Set<Topic> topics) {
        this.topics = topics;
    }

    @Override
    public String toString() {
        return "Volunteer [topics=" + topics + ", volunteerContact=" + volunteerContact + ", volunteerFirstname="
                + volunteerFirstname + ", volunteerId=" + volunteerId + ", volunteerIsAvailable=" + volunteerIsAvailable
                + ", volunteerLastname=" + volunteerLastname + ", volunteerTimestamp=" + volunteerTimestamp
                + ", volunteerUsername=" + volunteerUsername + "]";
    }
    
}
