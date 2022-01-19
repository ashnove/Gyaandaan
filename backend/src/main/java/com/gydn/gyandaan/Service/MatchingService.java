package com.gydn.gyandaan.Service;

import com.gydn.gyandaan.Entity.Volunteer;
import com.gydn.gyandaan.Entity.VolunteerStatus;
import com.gydn.gyandaan.Repository.VolunteerRepository;
import com.gydn.gyandaan.Repository.VolunteerStatusRepository;
import com.gydn.gyandaan.Utility.EndSessionRequest;
import com.gydn.gyandaan.Utility.MatchRequest;
import com.gydn.gyandaan.Utility.MatchResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchingService {

    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    VolunteerStatusRepository volunteerStatusRepository;
    
    public MatchResponse mactchStudentWithVolunteerService(MatchRequest matchRequest) {
        String studentUsername = matchRequest.getStudentUsername();
        String topicName = matchRequest.getTopicName();

        // get the volunteer username jo free hai
        Volunteer availableVolunteer = volunteerRepository.getAvailableVolunteer(topicName);

        Long volunteerId = availableVolunteer.getVolunteerId();
        String volunteerUsername = availableVolunteer.getVolunteerUsername();
        
        // delete old timestamp of vol
        volunteerStatusRepository.deleteByVolunteerId(volunteerId);
        
        // set new timestamp of vol
        VolunteerStatus newVolunteerStatus = new VolunteerStatus();
        newVolunteerStatus.setVolunteerId(volunteerId);
        volunteerStatusRepository.save(newVolunteerStatus);
        
        // set vol availability
        volunteerRepository.setVolunteerUnavailable(volunteerId);

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
