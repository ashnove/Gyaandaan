package com.gydn.gyandaan.Entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Topics {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long topicId;
    private String name;

    @ManyToMany(mappedBy = "topics", fetch = FetchType.LAZY)
	@JsonIgnoreProperties("topics")
	private Set<Volunteer> volunteers = new HashSet<>() ;

    public Topics() {

    }

    public Long getTopicId() {
        return topicId;
    }
    public void setTopicId(Long topicId) {
        this.topicId = topicId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public Set<Volunteer> getVolunteers() {
        return volunteers;
    }

    public void setVolunteers(Set<Volunteer> volunteers) {
        this.volunteers = volunteers;
    }

    @Override
    public String toString() {
        return "Topics [name=" + name + ", topicId=" + topicId + ", volunteers=" + volunteers + "]";
    }

    
    
}
