package com.gydn.gyandaan.Service;

import java.util.List;
import java.util.Objects;

import com.gydn.gyandaan.Entity.Topics;
import com.gydn.gyandaan.Entity.Volunteer;
import com.gydn.gyandaan.Repository.TopicRepository;
import com.gydn.gyandaan.Repository.VolunteerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VolunteerService {
    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    TopicRepository topicRepository;

    public Volunteer saveVolunteerPrefService(Volunteer volunteer){
        Volunteer getVolunteer = volunteerRepository.findVolunteerByName(volunteer.getName());
        volunteer.getTopics().forEach( (topic) -> {
            Topics getTopic = topicRepository.findTopicByName(topic.getName());
            getVolunteer.getTopics().add(getTopic);
        });
        try {
            volunteer.getTopics().forEach( (topic) -> {
                Topics getTopic = topicRepository.findTopicByName(topic.getName());
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
