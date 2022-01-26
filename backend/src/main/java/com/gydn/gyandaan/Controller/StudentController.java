package com.gydn.gyandaan.Controller;

import java.util.List;

import com.gydn.gyandaan.Entity.Student;
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

    Logger logger = LoggerFactory.getLogger(StudentController.class);

    @PostMapping("/saveStudentPref")
    public Student saveStudentPrefController(@RequestBody Student student){
        logger.info("New preferences for " + student.getUsername() + " saved");
        return studentService.saveStudentPrefService(student);
    }

    @PostMapping("/addStudent")
    public Student addStudentController(@RequestBody Student student){
        logger.info("Student username = " + student.getUsername() + " added");
        return studentService.addStudentService(student);
    }

    @GetMapping("/students")
    public List<Student> getAllStudent(){
        logger.info("Fetching all students");
        return studentService.getAllStudentsService();
    }
    @GetMapping("/volunteers")
    public List<Student> getAllVolunteersController(){
        logger.info("Fetching all volunteers");
        return studentService.getAllVolunteersService();
    }

    //Requires Authentication
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam("username") String username, @RequestParam("password") String password) {
        logger.info("Logging in with username = "+username+", password = "+password);
        return authService.login(username, password);
    }

    public ResponseEntity<?> changeAvailabilityStatus(@RequestParam("username") String username, @RequestParam("available") Boolean available){
        logger.info("User with username = "+username+" will have availability = "+available);
        return studentService.changeAvailabilityStatus(username, available);
    }

    // @GetMapping("/autoLogin")
    // public ResponseEntity<?> autoLogin() {
    //     logger.info("AutoLogin");
    //     return authService.autoLogin();
    // }

    // @GetMapping("/logout")
    // public ResponseEntity<?> logout() {
    //     logger.info("logging out" + authService.currUser==null?"null":authService.currUser.getStudentUsername());
    //     return authService.logout();
    // }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestParam("username") String username, @RequestParam("password") String password,  @RequestParam("email") String email) {
        logger.info("Registering with username = "+username+", password = "+password);
        return authService.register(username, password, email);
    }
}
