package com.gydn.gyandaan.Service;

import java.util.Date;
import java.util.Objects;

import com.gydn.gyandaan.Entity.Volunteer;
import com.gydn.gyandaan.Entity.VolunteerStatus;
import com.gydn.gyandaan.Repository.VolunteerRepository;
import com.gydn.gyandaan.Repository.VolunteerStatusRepository;
import com.gydn.gyandaan.Utility.EndSessionRequest;
import com.gydn.gyandaan.Utility.MatchRequest;
import com.gydn.gyandaan.Utility.MatchResponse;

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

        // get the volunteer username jo free hai
        Long availableVolunteerId = volunteerRepository.getAvailableVolunteer(topicName);
        logger.info("availableVolunteer:" + availableVolunteerId);
        Volunteer availableVolunteer = volunteerRepository.findVolunteerById(availableVolunteerId);
        logger.info("Volunteer fetched: " + Objects.isNull(availableVolunteer));
        if(Objects.isNull(availableVolunteer)){
            return new MatchResponse(studentUsername, "UNAVAILABLE");
        }
        // return new MatchResponse("test1", "test2");
        Long volunteerId = availableVolunteer.getVolunteerId();
        String volunteerUsername = availableVolunteer.getVolunteerUsername();
        
        // delete old timestamp of vol
        // volunteerStatusRepository.deleteByVolunteerId(volunteerId);
        // try {
        //     volunteerStatusRepository.deleteById(volunteerId);
        // }
        // catch(Exception e ){
        //     logger.info("Not Deleted: " + e.getMessage());
        // }
        // set new timestamp of vol
        // VolunteerStatus newVolunteerStatus = new VolunteerStatus();
        // newVolunteerStatus.setVolunteerId(volunteerId);
        // try {
        //     volunteerStatusRepository.save(newVolunteerStatus);
        // }
        // catch(Exception e ){
        //     logger.info("Not Saved: " + e.getMessage());
        // }
        // set vol availability
        Date volunteerTimestamp = new Date();
        volunteerRepository.updateVolunteerTimestamp(volunteerTimestamp, volunteerId);
        logger.info("Date Update: " + volunteerTimestamp);
        try {
        volunteerRepository.setVolunteerUnavailable(volunteerId);
        }
        catch(Exception e){
            logger.warn("66,67: " + e.getMessage());
        }

        // return MatchResponse obj
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
