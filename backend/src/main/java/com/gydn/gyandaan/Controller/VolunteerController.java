package com.gydn.gyandaan.Controller;

import java.util.List;

import com.gydn.gyandaan.Entity.Volunteer;
import com.gydn.gyandaan.Service.VolunteerService;

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
public class VolunteerController {
    @Autowired
    VolunteerService volunteerService;

    @PostMapping("/saveVolunteerPref")
    public Volunteer saveVolunteerPrefController(@RequestBody Volunteer volunteer){
        return volunteerService.saveVolunteerPrefService(volunteer);
    }

    @PostMapping("/addVolunteer")
    public Volunteer addVolunteerController(@RequestBody Volunteer volunteer){
        return volunteerService.addVolunteerService(volunteer);
    }

    @GetMapping("/volunteers")
    public List<Volunteer> getAllVolunteersController(){
        return volunteerService.getAllVolunteersService();
    }
}
