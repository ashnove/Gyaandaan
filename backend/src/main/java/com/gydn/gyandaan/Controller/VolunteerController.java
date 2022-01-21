package com.gydn.gyandaan.Controller;

import java.util.List;

import com.gydn.gyandaan.Entity.Volunteer;
import com.gydn.gyandaan.Service.VolunteerService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class VolunteerController {
    @Autowired
    VolunteerService volunteerService;

    Logger logger = LoggerFactory.getLogger(VolunteerController.class);

    @PostMapping("/saveVolunteerPref")
    public ResponseEntity<?> saveVolunteerPrefController(@RequestBody Volunteer volunteer){
        logger.info("New preferences for " + volunteer.getVolunteerUsername() + "is saved");
        return ResponseEntity.ok().body(volunteerService.saveVolunteerPrefService(volunteer));
    }

    @PostMapping("/addVolunteer")
    public Volunteer addVolunteerController(@RequestBody Volunteer volunteer){
        logger.info("Volunteer username = " + volunteer.getVolunteerUsername() + " added");
        return volunteerService.addVolunteerService(volunteer);
    }

    @GetMapping("/volunteers")
    public List<Volunteer> getAllVolunteersController(){
        logger.info("Fetching all volunteers");
        return volunteerService.getAllVolunteersService();
    }
}
