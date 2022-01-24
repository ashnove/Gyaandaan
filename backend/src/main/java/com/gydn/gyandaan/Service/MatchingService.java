package com.gydn.gyandaan.Service;

import java.util.Date;
import java.util.Objects;

import com.gydn.gyandaan.DTO.EndSessionRequest;
import com.gydn.gyandaan.DTO.MatchRequest;
import com.gydn.gyandaan.DTO.MatchResponse;
import com.gydn.gyandaan.Entity.Volunteer;
import com.gydn.gyandaan.Entity.VolunteerStatus;
import com.gydn.gyandaan.Repository.VolunteerRepository;
import com.gydn.gyandaan.Repository.VolunteerStatusRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchingService {

    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    VolunteerStatusRepository volunteerStatusRepository;

    Logger logger = LoggerFactory.getLogger(VolunteerService.class);
    
    public MatchResponse mactchStudentWithVolunteerService(MatchRequest matchRequest) {
        String studentUsername = matchRequest.getStudentUsername();
        String topicName = matchRequest.getTopicName();

        Long availableVolunteerId = volunteerRepository.getAvailableVolunteer(topicName);
        Volunteer availableVolunteer = volunteerRepository.findVolunteerById(availableVolunteerId);
        if(Objects.isNull(availableVolunteer)){
            return new MatchResponse(studentUsername, "UNAVAILABLE");
        }

        Long volunteerId = availableVolunteer.getVolunteerId();
        String volunteerUsername = availableVolunteer.getVolunteerUsername();     
        Date volunteerTimestamp = new Date();
        volunteerRepository.updateVolunteerTimestamp(volunteerTimestamp, volunteerId);

        try {
            volunteerRepository.setVolunteerUnavailable(volunteerId);
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
            Volunteer volunteer = volunteerRepository.findVolunteerByName(username);
            Long volunteerId = volunteer.getVolunteerId();
            volunteerRepository.setVolunteerAvailable(volunteerId);
        }
        else{

        }
        //dono ke liye timestamp update kar do
    }
}
