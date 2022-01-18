package com.gydn.gyandaan.Service;

import java.util.List;

import com.gydn.gyandaan.Entity.Topic;
import com.gydn.gyandaan.Repository.TopicRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {
    @Autowired
    TopicRepository topicRepository;

    public List<Topic> saveTopicService(List<Topic> topic){
        return topicRepository.saveAll(topic);
    }
    public List<Topic> getAllTopicsService(){
        return topicRepository.findAll();
    }
}
