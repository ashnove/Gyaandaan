package com.gydn.gyandaan.Config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.gydn.gyandaan.Entity.Student;
import com.gydn.gyandaan.Repository.StudentRepository;
import com.gydn.gyandaan.Service.AuthService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class RequestFilter extends OncePerRequestFilter {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    AuthService authService;
    
    Logger logger = LoggerFactory.getLogger(RequestFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String token = request.getHeader("Authorization");
        Student user = null;
        if (token != null)
            user = studentRepository.findByToken(token);
        
        if (user != null)
            authService.currUser = user;

        logger.info(token+" "+user);

        filterChain.doFilter(request, response);
    }

}
