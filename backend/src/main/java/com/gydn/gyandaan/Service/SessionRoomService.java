package com.gydn.gyandaan.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import com.gydn.gyandaan.Entity.SessionRoom;
import com.gydn.gyandaan.Repository.SessionRoomRepository;

@Service
public class SessionRoomService {

    @Autowired private SessionRoomRepository sessionRoomRepository;

    Logger logger = LoggerFactory.getLogger(SessionRoomService.class);
    public Optional<String> getSessionId(String senderId, String recipientId, boolean createIfNotExist) {
         return sessionRoomRepository
                .findBySenderIdAndRecipientId(senderId, recipientId)
                .map(SessionRoom::getSessionId)
                .or(() -> {
                        if(!createIfNotExist) {
                                return  Optional.empty();
                        }
                        var sessionId =
                                String.format("%s_%s", senderId, recipientId);

                        SessionRoom senderRecipient = SessionRoom
                                .builder()
                                .sessionId(sessionId)
                                .senderId(senderId)
                                .recipientId(recipientId)
                                .build();

                        SessionRoom recipientSender = SessionRoom
                                .builder()
                                .sessionId(sessionId)
                                .senderId(recipientId)
                                .recipientId(senderId)
                                .build();
                        logger.info("SessionRoom for {" + senderId + " ," + recipientId + "} saved");
                        sessionRoomRepository.save(senderRecipient);
                        sessionRoomRepository.save(recipientSender);
                        return Optional.of(sessionId);
                });
    }
}
