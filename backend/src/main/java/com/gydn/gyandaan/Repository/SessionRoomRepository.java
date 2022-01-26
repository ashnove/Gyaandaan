package com.gydn.gyandaan.Repository;

import java.util.Optional;

import com.gydn.gyandaan.Entity.SessionRoom;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRoomRepository extends JpaRepository<SessionRoom, String> {
    Optional<SessionRoom> findBySenderIdAndRecipientId(String senderId, String recipientId);
}
