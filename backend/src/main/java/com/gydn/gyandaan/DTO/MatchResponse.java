package com.gydn.gyandaan.DTO;

public class MatchResponse {
    private String studentUsername;
    private String volunteerUsername;

    public MatchResponse() {

    }

    public MatchResponse(String studentUsername, String volunteerUsername) {
        this.studentUsername = studentUsername;
        this.volunteerUsername = volunteerUsername;
    }

    public String getStudentUsername() {
        return studentUsername;
    }

    public void setStudentUsername(String studentUsername) {
        this.studentUsername = studentUsername;
    }

    public String getVolunteerUsername() {
        return volunteerUsername;
    }

    public void setVolunteerUsername(String volunteerUsername) {
        this.volunteerUsername = volunteerUsername;
    }
    
}
