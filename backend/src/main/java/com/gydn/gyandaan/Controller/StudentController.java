package com.gydn.gyandaan.Controller;

import java.util.List;

import com.gydn.gyandaan.Entity.Student;
import com.gydn.gyandaan.Service.StudentService;

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
@RequestMapping
@CrossOrigin(origins = "*")
public class StudentController {
    @Autowired
    StudentService studentService;

    Logger logger = LoggerFactory.getLogger(StudentController.class);
    @PostMapping("/saveStudentPref")
    public Student saveStudentPrefController(@RequestBody Student student){
        logger.info("New preferences for " + student.getStudentUsername() + " saved");
        return studentService.saveStudentPrefService(student);
    }

    @PostMapping("/addStudent")
    public Student addStudentController(@RequestBody Student student){
        logger.info("Student username = " + student.getStudentUsername() + " added");
        return studentService.addStudentService(student);
    }

    @GetMapping("/students")
    public List<Student> getAllStudent(){
        logger.info("Fetching all students");
        return studentService.getAllStudentsService();
    }
}
