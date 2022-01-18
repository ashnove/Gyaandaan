package com.gydn.gyandaan.Service;

import java.util.List;

import com.gydn.gyandaan.Entity.Topics;
import com.gydn.gyandaan.Repository.TopicRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {
    @Autowired
    TopicRepository topicRepository;

    public List<Topics> saveTopicService(List<Topics> topic){
        return topicRepository.saveAll(topic);
    }
    public List<Topics> getAllTopicsService(){
        return topicRepository.findAll();
    }
}
