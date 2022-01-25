package com.gydn.gyandaan.Controller;

import java.util.List;

import com.gydn.gyandaan.Entity.Topic;
import com.gydn.gyandaan.Service.TopicService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gydn")
@CrossOrigin(origins = "*")
public class TopicController {

    @Autowired
    TopicService topicService;

    Logger logger = LoggerFactory.getLogger(TopicController.class);

    @PostMapping("/addTopic")
    public List<Topic> saveTopicController(@RequestBody List<Topic> topic){
        logger.info("New topic count = " + topic.size() + " added");
        return topicService.saveTopicService(topic);
    }

    @GetMapping("/topics")
    public List<Topic> getAllTopicsController() {
        logger.info("Fetching all topics");
        return topicService.getAllTopicsService();
    }
}
