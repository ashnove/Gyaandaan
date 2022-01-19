package com.gydn.gyandaan.Service;

import java.util.List;
import java.util.Objects;

import com.gydn.gyandaan.Entity.Topic;
import com.gydn.gyandaan.Entity.Volunteer;
import com.gydn.gyandaan.Repository.TopicRepository;
import com.gydn.gyandaan.Repository.VolunteerRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VolunteerService {
    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    TopicRepository topicRepository;

    Logger logger = LoggerFactory.getLogger(VolunteerService.class);

    public Volunteer saveVolunteerPrefService(Volunteer volunteer){
        Volunteer getVolunteer = volunteerRepository.findVolunteerByName(volunteer.getVolunteerUsername());
        logger.info( (Objects.isNull(getVolunteer)==true) ? volunteer.getVolunteerUsername() : "False" );
        volunteer.getTopics().forEach( (topic) -> {
            Topic getTopic = topicRepository.findTopicByName(topic.getTopicName());
            getVolunteer.getTopics().add(getTopic);
        });
        try {
            volunteer.getTopics().forEach( (topic) -> {
                Topic getTopic = topicRepository.findTopicByName(topic.getTopicName());
                getTopic.getVolunteers().add(getVolunteer);
            });
        } 
        catch(Exception e){
            System.out.println(e.getMessage());
        }
        return volunteerRepository.save(getVolunteer); 
    }  
    public Volunteer addVolunteerService(Volunteer volunteer){
        return volunteerRepository.save(volunteer);
    }
    public List<Volunteer> getAllVolunteersService(){
        return volunteerRepository.findAll();
    }
}
