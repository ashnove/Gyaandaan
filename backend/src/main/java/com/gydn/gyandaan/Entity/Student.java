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
    private Long id;
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String email;
    private String token;
    private Boolean available;
    private Long sessions;
    private Long type;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date lastSessionTimestamp;

    @PrePersist
    private void onCreate() {
        lastSessionTimestamp = new Date();
    }

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "student_topics", joinColumns = { @JoinColumn(name = "student_id") }, inverseJoinColumns = {
            @JoinColumn(name = "topic_id") })
    @JsonIgnoreProperties({ "students" })
    private Set<Topic> topics = new HashSet<>();

    public Student() {
        this.available = false;
        this.type = 1L;
        this.sessions = 0L;
    }

    public Student(String username, String password, String firstname, String lastname, String email, String token) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public Long getSessions() {
        return sessions;
    }

    public void setSessions(Long sessions) {
        this.sessions = sessions;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public Long getType() {
        return type;
    }

    public void setType(Long type) {
        this.type = type;
    }

    public Date getLastSessionTimestamp() {
        return lastSessionTimestamp;
    }

    public void setLastSessionTimestamp(Date lastSessionTimestamp) {
        this.lastSessionTimestamp = lastSessionTimestamp;
    }

    public Set<Topic> getTopics() {
        return topics;
    }

    public void setTopics(Set<Topic> topics) {
        this.topics = topics;
    }

    @Override
    public String toString() {
        return "Student [available=" + available + ", email=" + email + ", firstname=" + firstname + ", id=" + id
                + ", lastSessionTimestamp=" + lastSessionTimestamp + ", lastname=" + lastname + ", password=" + password
                + ", token=" + token + ", topics=" + topics + ", type=" + type + ", username=" + username + "]";
    }

}
