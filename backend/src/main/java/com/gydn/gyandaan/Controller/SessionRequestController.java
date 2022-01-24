package com.gydn.gyandaan.Controller;

import com.gydn.gyandaan.DTO.SessionRequest;
import com.gydn.gyandaan.Service.SessionRoomService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin(origins = "*")
public class SessionRequestController {
    
    @Autowired 
    private SimpMessagingTemplate messagingTemplate;
    @Autowired private SessionRoomService sessionRoomService;

    Logger logger = LoggerFactory.getLogger(SessionRequestController.class);

    @MessageMapping("/request")
    public void processMessage(@Payload SessionRequest sessionRequest) {

        var sessionId = sessionRoomService.getSessionId(sessionRequest.getSenderId(), sessionRequest.getRecipientId(), true);
        sessionRequest.setSessionId(sessionId.get());

        SessionRequest recievedRequest = new SessionRequest();
        recievedRequest.setId(sessionRequest.getId());
        recievedRequest.setSenderId(sessionRequest.getSenderId());
        recievedRequest.setSenderName(sessionRequest.getSenderName());
        recievedRequest.setContent(sessionRequest.getContent());
        logger.info(sessionRequest.getSenderName() + " sent '"+ sessionRequest.getContent() +"' to " + sessionRequest.getRecipientName());
        messagingTemplate.convertAndSendToUser( sessionRequest.getRecipientId(),"/queue/requests", recievedRequest );
    }
}
