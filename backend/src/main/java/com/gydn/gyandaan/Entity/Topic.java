package com.gydn.gyandaan.Entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Topic {
    @Id
    @GeneratedValue
    private Long topicId;
    private String topicName;
    private String category;

    @ManyToMany(mappedBy = "topics", fetch = FetchType.LAZY)
	@JsonIgnoreProperties("topics")
	private Set<Student> students = new HashSet<>() ;

    public Topic() {

    }

    public Long getTopicId() {
        return topicId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    @Override
    public String toString() {
        return "Topic [students=" + students + ", topicId=" + topicId + ", topicName=" + topicName + "]";
    }

    
    
}
