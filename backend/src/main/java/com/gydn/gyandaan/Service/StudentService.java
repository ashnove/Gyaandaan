package com.gydn.gyandaan.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.gydn.gyandaan.Entity.Student;
import com.gydn.gyandaan.Entity.Topic;
import com.gydn.gyandaan.Repository.StudentRepository;
import com.gydn.gyandaan.Repository.TopicRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    TopicRepository topicRepository;

    Logger logger = LoggerFactory.getLogger(StudentService.class);

    public Student saveStudentPrefService(Student student) {
        Student getStudent = studentRepository.findByUsername(student.getUsername());
        student.getTopics().forEach((topic) -> {
            Topic getTopic = topicRepository.findTopicByName(topic.getTopicName());
            getStudent.getTopics().add(getTopic);
        });
        try {
            student.getTopics().forEach((topic) -> {
                Topic getTopic = topicRepository.findTopicByName(topic.getTopicName());
                getTopic.getStudents().add(getStudent);
            });
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return studentRepository.save(getStudent);
    }

    public Student addStudentService(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudentsService() {
        return studentRepository.findAllStudents();
    }

    public List<Student> getAllVolunteersService() {
        return studentRepository.findAllVolunteers();
    }

    public ResponseEntity<?> changeAvailabilityStatus(String username, Boolean available) {

        Map<String, Object> response = new HashMap<>();
        try {
            if (available == true) {
                studentRepository.setVolunteerAvailable(username);
            } else {
                studentRepository.setVolunteerUnavailable(username);
            }
            response.put("success", true);
            response.put("message", "Updated Successfully");
        } catch (Exception e) {
            logger.error("Availability Change was Unsucessful");
            response.put("success", false);
            response.put("message", "Availability Change was Unsucessful");
        }
        return ResponseEntity.ok().body(response);
    }

    public ResponseEntity<?> setUserTypeService(String username, Long type) {

        Map<String, Object> response = new HashMap<>();
        try {
            studentRepository.setUserType(username, type);
            response.put("success", true);
            response.put("message", "Updated Successfully");
            return ResponseEntity.ok().body(response);

        } catch (

        Exception e) {
            logger.error("Availability Change was Unsucessful");
            response.put("success", false);
            response.put("message", "Type Change was Unsucessful");
            return ResponseEntity.status(401).body(response);
        }
    }

    public ResponseEntity<?> updateProfileService(Student student) {
        Student updateStudent = studentRepository.findByUsername(student.getUsername());
        return ResponseEntity.ok().body(studentRepository.save(student));
    }

    public Map<String, Object> export(Student user, String token) {
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        map.put("token", token);
        return map;
    }

}
