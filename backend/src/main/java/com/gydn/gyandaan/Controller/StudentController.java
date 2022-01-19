package com.gydn.gyandaan.Controller;

import java.util.List;

import com.gydn.gyandaan.Entity.Student;
import com.gydn.gyandaan.Service.StudentService;

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

    @PostMapping("/saveStudentPref")
    public Student saveStudentPrefController(@RequestBody Student student){
        return studentService.saveStudentPrefService(student);
    }

    @PostMapping("/addStudent")
    public Student addStudentController(@RequestBody Student student){
        return studentService.addStudentService(student);
    }

    @GetMapping("/students")
    public List<Student> getAllStudent(){
        return studentService.getAllStudentsService();
    }
}
