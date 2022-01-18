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
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long topicId;
    private String topicName;

    @ManyToMany(mappedBy = "topics", fetch = FetchType.LAZY)
	@JsonIgnoreProperties("topics")
	private Set<Volunteer> volunteers = new HashSet<>() ;

    @ManyToMany(mappedBy = "topics", fetch = FetchType.LAZY)
	@JsonIgnoreProperties("topics")
	private Set<Student> students = new HashSet<>() ;

    public Topic() {

    }

    public Long getTopicId() {
        return topicId;
    }
    public void setTopicId(Long topicId) {
        this.topicId = topicId;
    }
    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public Set<Volunteer> getVolunteers() {
        return volunteers;
    }

    public void setVolunteers(Set<Volunteer> volunteers) {
        this.volunteers = volunteers;
    }
    
    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    @Override
    public String toString() {
        return "Topic [students=" + students + ", topicId=" + topicId + ", topicName=" + topicName + ", volunteers="
                + volunteers + "]";
    }

    
    
}
