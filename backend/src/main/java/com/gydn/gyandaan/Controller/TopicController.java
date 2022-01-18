package com.gydn.gyandaan.Controller;

import java.util.List;

import com.gydn.gyandaan.Entity.Topics;
import com.gydn.gyandaan.Service.TopicService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class TopicController {

    @Autowired
    TopicService topicService;

    @PostMapping("/addTopic")
    public List<Topics> saveTopicController(@RequestBody List<Topics> topic){
        return topicService.saveTopicService(topic);
    }

    @GetMapping("/topics")
    public List<Topics> getAllTopicsController() {
        return topicService.getAllTopicsService();
    }
}
