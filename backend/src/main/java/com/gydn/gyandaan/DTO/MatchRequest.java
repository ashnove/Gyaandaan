package com.gydn.gyandaan.DTO;

public class MatchRequest {
    private String studentUsername;
    private String topicName;

    public MatchRequest() {

    }

    public String getStudentUsername() {
        return studentUsername;
    }

    public void setStudentUsername(String studentUsername) {
        this.studentUsername = studentUsername;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }
    
}
