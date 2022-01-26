package com.gydn.gyandaan.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        List<Topic> topics = topicRepository.findAll();
        List<Map<String, Object>> topicsResponse = new ArrayList<>();
        topics.forEach(topic -> {
            Map<String, Object> map = new HashMap<>();
            map.put("label", topic.getTopicName());
            map.put("value", topic.getTopicName());
            map.put("category", topic.getCategory());
            topicsResponse.add(map);
        });
        return topics;
    }
}
