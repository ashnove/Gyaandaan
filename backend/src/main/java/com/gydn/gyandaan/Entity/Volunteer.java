package com.gydn.gyandaan.Entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
public class Volunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long volunteerId;
    private String name;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "volunteer_topics",
        joinColumns = { @JoinColumn(name = "volunteer_id") },
        inverseJoinColumns = { @JoinColumn(name = "topic_id") })
    @JsonIgnoreProperties("volunteers")
    private Set<Topics> topics = new HashSet<>();

    public Volunteer () {

    }

    public Long getVolunteerId() {
        return volunteerId;
    }
    public void setVolunteerId(Long volunteerId) {
        this.volunteerId = volunteerId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public Set<Topics> getTopics() {
        return topics;
    }

    public void setTopics(Set<Topics> topics) {
        this.topics = topics;
    }

    @Override
    public String toString() {
        return "Volunteer [volunteerId=" + volunteerId + ", name=" + name + ", topics=" + topics + "]";
    }

    
}
