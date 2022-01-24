package com.gydn.gyandaan.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.gydn.gyandaan.Entity.Student;
import com.gydn.gyandaan.Entity.Topic;
import com.gydn.gyandaan.Repository.StudentRepository;
import com.gydn.gyandaan.Repository.TopicRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    
    @Autowired
    StudentRepository studentRepository;

    @Autowired
    TopicRepository topicRepository;

    public Student saveStudentPrefService(Student student){
        Student getStudent = studentRepository.findStudentByName(student.getStudentUsername());
        student.getTopics().forEach( (topic) -> {
            Topic getTopic = topicRepository.findTopicByName(topic.getTopicName());
            getStudent.getTopics().add(getTopic);
        });
        try {
            student.getTopics().forEach( (topic) -> {
                Topic getTopic = topicRepository.findTopicByName(topic.getTopicName());
                getTopic.getStudents().add(getStudent);
            });
        } 
        catch(Exception e){
            System.out.println(e.getMessage());
        }
        return studentRepository.save(getStudent); 
    }  
    public Student addStudentService(Student student){
        return studentRepository.save(student);
    }
    public List<Student> getAllStudentsService(){
        return studentRepository.findAll();
    }

    public Map<String, Object> export(Student user) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("username", user.getStudentUsername());
        return map;
    }

}
