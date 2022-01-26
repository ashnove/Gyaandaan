package com.gydn.gyandaan.Controller;

import java.util.List;

import com.gydn.gyandaan.Entity.Student;
import com.gydn.gyandaan.Repository.StudentRepository;
import com.gydn.gyandaan.Service.AuthService;
import com.gydn.gyandaan.Service.StudentService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
@CrossOrigin(origins = "*")
public class StudentController {
    @Autowired
    StudentService studentService;
    @Autowired
    AuthService authService;
    @Autowired
    StudentRepository studentRepository;

    Logger logger = LoggerFactory.getLogger(StudentController.class);

    @PostMapping("/saveStudentPref")
    public Student saveStudentPrefController(@RequestBody Student student) {
        logger.info("New preferences for " + student.getUsername() + " saved");
        return studentService.saveStudentPrefService(student);
    }

    @PostMapping("/addStudent")
    public Student addStudentController(@RequestBody Student student) {
        logger.info("Student username = " + student.getUsername() + " added");
        return studentService.addStudentService(student);
    }

    @GetMapping("/students")
    public List<Student> getAllStudent() {
        logger.info("Fetching all students");
        return studentService.getAllStudentsService();
    }

    @GetMapping("/volunteers")
    public List<Student> getAllVolunteersController() {
        logger.info("Fetching all volunteers");
        return studentService.getAllVolunteersService();
    }

    @PostMapping("/getUser")
    public Student getUserController(@RequestParam("username") String username) {
        return studentRepository.findByUsername(username);
        // logger.info(student.toString());
    }

    // Requires Authentication
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam("username") String username,
            @RequestParam("password") String password) {
        logger.info("Logging in with username = " + username + ", password = " + password);
        return authService.login(username, password);
    }

    @PostMapping("/changeAvailabilityStatus")
    public ResponseEntity<?> changeAvailabilityStatus(@RequestParam("username") String username,
            @RequestParam("available") Boolean available) {
        logger.info("User with username = " + username + " will have availability = " + available);
        return studentService.changeAvailabilityStatus(username, available);
    }

    @PostMapping("/changeType")
    public ResponseEntity<?> changeTypeController(@RequestParam("username") String username,
            @RequestParam("type") Long type) {
        logger.info("User with username = " + username + " will have type = " + type);
        return studentService.setUserTypeService(username, type);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Student student) {
        // logger.info("Registering with username = " + username + ", password = " +
        // password);
        return authService.register(student);
    }
}
