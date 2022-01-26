package com.gydn.gyandaan.Service;

import java.util.Date;
import java.util.Objects;

import com.gydn.gyandaan.DTO.EndSessionRequest;
import com.gydn.gyandaan.DTO.MatchRequest;
import com.gydn.gyandaan.DTO.MatchResponse;
import com.gydn.gyandaan.Entity.Student;
import com.gydn.gyandaan.Entity.StudentHistory;
import com.gydn.gyandaan.Repository.StudentHistoryRepository;
import com.gydn.gyandaan.Repository.StudentRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchingService {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    StudentHistoryRepository studentHistoryRepository;

    Logger logger = LoggerFactory.getLogger(MatchingService.class);
    
    public MatchResponse mactchStudentWithVolunteerService(MatchRequest matchRequest) {
        String studentUsername = matchRequest.getStudentUsername();
        String topicName = matchRequest.getTopicName();

        Long availableVolunteerId = studentRepository.getAvailableVolunteer(topicName);
        Student availableVolunteer = studentRepository.findById(availableVolunteerId).get();
        if(Objects.isNull(availableVolunteer)){
            return new MatchResponse(studentUsername, "UNAVAILABLE");
        }

        Long volunteerId = availableVolunteer.getId();
        String volunteerUsername = availableVolunteer.getUsername();     
        Date volunteerTimestamp = new Date();
        studentRepository.updateVolunteerTimestamp(volunteerTimestamp, volunteerId);
        StudentHistory studentHistory = new StudentHistory(volunteerId);
        studentHistoryRepository.save(studentHistory);

        try {
            studentRepository.setVolunteerUnavailable(volunteerUsername);
        }
        catch(Exception e){
            logger.warn("Problem with the update query to set Mentor unavailable");
        }

        logger.info("Student username = " + studentUsername + " and Mentor username = " + volunteerUsername + " is matched");
        MatchResponse matchResponse = new MatchResponse(studentUsername, volunteerUsername);
        return matchResponse;
    }

    public void endSessionService(EndSessionRequest endSessionRequest) {
        String username = endSessionRequest.getUsername();
        Long type = endSessionRequest.getType();
        // type = 1: Volunteer, 2: Student;
        if(type == 1){
            studentRepository.setVolunteerAvailable(username);
        }
        else{

        }
        //dono ke liye timestamp update kar do
    }
}
