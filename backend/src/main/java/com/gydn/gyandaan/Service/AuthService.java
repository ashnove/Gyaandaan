package com.gydn.gyandaan.Service;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.Map;

import com.gydn.gyandaan.Entity.Student;
import com.gydn.gyandaan.Repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    StudentRepository studentRepository;
    
    @Autowired
    StudentService studentService;

    @Autowired
    AuthService authService;

    private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64Encoder = Base64.getUrlEncoder();

    public Student currUser;

    public ResponseEntity<?> login(String username, String password) {
        Student user;
        try {
            user =  studentRepository.findStudentByName(username);
        }
        catch(Exception e){
            return ResponseEntity.status(401).body(Map.of("Message", "Login Failed"));
        }
        if(user == null)
            return ResponseEntity.status(401).body(Map.of("Message", "No Such Username exists"));

        HttpHeaders headers = new HttpHeaders();
        headers.set("Token", user.getToken());
        headers.set("Access-Control-Expose-Headers", "Token");

        return ResponseEntity.ok().headers(headers).body(studentService.export(user));
    }

    public ResponseEntity<?> autoLogin() {
        
        if(authService.currUser == null)
            return ResponseEntity.status(401).body(null);

        return ResponseEntity.ok().body(studentService.export(authService.currUser));
    }

    public ResponseEntity<?> logout() {
        
        authService.currUser.setToken(null);
        studentRepository.save(authService.currUser);
        authService.currUser = null;
        return ResponseEntity.ok().body(true);
    }

    public ResponseEntity<?> register(String username, String password, String email) {

        String token = generateNewToken();
        Student newUser = new Student(username, password, email, token);
        studentRepository.save(newUser);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Token", token);
        headers.set("Access-Control-Expose-Headers", "Token");
        
        return ResponseEntity.ok().headers(headers).body(studentService.export(newUser));
    }
    
    public String generateNewToken() {
        byte[] randomBytes = new byte[24];
        secureRandom.nextBytes(randomBytes);
        return base64Encoder.encodeToString(randomBytes);
    }
}