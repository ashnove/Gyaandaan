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
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;
    private String studentUsername;
    private String studentPassword;
    private String studentFirstname;
    private String studentLastname;
    private String studentEmail;
    private String token;
    private Boolean studentIsAvailable;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date studentTimestamp;

    @PrePersist
    private void onCreate() {
        studentTimestamp = new Date();
    }

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "student_topics",
        joinColumns = { @JoinColumn(name = "student_id") },
        inverseJoinColumns = { @JoinColumn(name = "topic_id") })
    @JsonIgnoreProperties({"students","volunteers"})
    private Set<Topic> topics = new HashSet<>();

    public Student () {

    }
    
    public Student(String studentUsername, String studentPassword, String studentEmail, String token) {
        this.studentUsername = studentUsername;
        this.studentPassword = studentPassword;
        this.studentEmail = studentEmail;
        this.token = token;
    }

    public String getStudentEmail() {
        return studentEmail;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }
    
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
    
    public String getStudentPassword() {
        return studentPassword;
    }

    public void setStudentPassword(String studentPassword) {
        this.studentPassword = studentPassword;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getStudentUsername() {
        return studentUsername;
    }

    public void setStudentUsername(String studentUsername) {
        this.studentUsername = studentUsername;
    }

    public String getStudentFirstname() {
        return studentFirstname;
    }

    public void setStudentFirstname(String studentFirstname) {
        this.studentFirstname = studentFirstname;
    }

    public String getStudentLastname() {
        return studentLastname;
    }

    public void setStudentLastname(String studentLastname) {
        this.studentLastname = studentLastname;
    }

    public Boolean getStudentIsAvailable() {
        return studentIsAvailable;
    }

    public void setStudentIsAvailable(Boolean studentIsAvailable) {
        this.studentIsAvailable = studentIsAvailable;
    }

    public Date getStudentTimestamp() {
        return studentTimestamp;
    }

    public void setStudentTimestamp(Date studentTimestamp) {
        this.studentTimestamp = studentTimestamp;
    }

    public Set<Topic> getTopics() {
        return topics;
    }

    public void setTopics(Set<Topic> topics) {
        this.topics = topics;
    }

    @Override
    public String toString() {
        return "Student [studentEmail=" + studentEmail + ", studentFirstname=" + studentFirstname + ", studentId="
                + studentId + ", studentIsAvailable=" + studentIsAvailable + ", studentLastname=" + studentLastname
                + ", studentTimestamp=" + studentTimestamp + ", studentUsername=" + studentUsername + ", token=" + token
                + ", topics=" + topics + "]";
    }
    
}
