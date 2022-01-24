package com.gydn.gyandaan.Controller;

import com.gydn.gyandaan.DTO.EndSessionRequest;
import com.gydn.gyandaan.DTO.MatchRequest;
import com.gydn.gyandaan.DTO.MatchResponse;
import com.gydn.gyandaan.Service.MatchingService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class SessionController {

    @Autowired
    MatchingService matchingService;

    Logger logger = LoggerFactory.getLogger(SessionController.class);

    @PostMapping("/startSession")
    public MatchResponse mactchStudentWithVolunteerController(@RequestBody MatchRequest matchRequest){
        logger.info("Student username = " + matchRequest.getStudentUsername() + " requested mentor");
        return matchingService.mactchStudentWithVolunteerService(matchRequest);
    }

    @PostMapping("/endSession")
    public String endSessionController(@RequestBody EndSessionRequest endSessionRequest){
        logger.info(endSessionRequest.getUsername() + " requested for session end");
        matchingService.endSessionService(endSessionRequest);
        return "Session Ended for" + endSessionRequest.getUsername();
    }
}
