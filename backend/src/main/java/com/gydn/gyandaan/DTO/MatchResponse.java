package com.gydn.gyandaan.DTO;

public class MatchResponse {
    private String studentUsername;
    private String volunteerUsername;
    private String volunteerName;
    private String studentName;

    public MatchResponse() {

    }

    public String getVolunteerName() {
        return volunteerName;
    }

    public MatchResponse(String studentUsername, String volunteerUsername, String volunteerName) {
        this.studentUsername = studentUsername;
        this.volunteerUsername = volunteerUsername;
        this.volunteerName = volunteerName;
    }

    public void setVolunteerName(String volunteerName) {
        this.volunteerName = volunteerName;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
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
