package com.gydn.gyandaan.Controller;

import com.gydn.gyandaan.Service.MatchingService;
import com.gydn.gyandaan.Utility.EndSessionRequest;
import com.gydn.gyandaan.Utility.MatchRequest;
import com.gydn.gyandaan.Utility.MatchResponse;

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

    @PostMapping("/startSession")
    public MatchResponse mactchStudentWithVolunteerController(@RequestBody MatchRequest matchRequest){
        return matchingService.mactchStudentWithVolunteerService(matchRequest);
    }

    @PostMapping("/endSession")
    public String endSessionController(@RequestBody EndSessionRequest endSessionRequest){
        matchingService.endSessionService(endSessionRequest);
        return "Session Ended for" + endSessionRequest.getUsername();
    }
}
