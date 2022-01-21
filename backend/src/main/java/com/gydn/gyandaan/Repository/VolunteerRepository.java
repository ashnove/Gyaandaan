package com.gydn.gyandaan.Repository;

import java.util.Date;

import javax.transaction.Transactional;

import com.gydn.gyandaan.Entity.Volunteer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {
    String GET_VOLUNTEER_BY_NAME = "SELECT * FROM GYDNTABLE.volunteer WHERE volunteer_username = ?1";
    String GET_VOLUNTEER_BY_ID = "SELECT * FROM GYDNTABLE.volunteer WHERE volunteer_id = ?1";
    String GET_AVAILABLE_VOLUNTEER_BY_TOPICNAME = "SELECT volunteer_id FROM GYDNTABLE.topic t JOIN GYDNTABLE.volunteer WHERE topic_name = ?1 AND volunteer_is_available = 1 ORDER BY volunteer_timestamp DESC LIMIT 1";
    String SET_VOLUNTEER_UNAVAILABLE = "UPDATE GYDNTABLE.volunteer v SET v.volunteer_is_available = false WHERE v.volunteer_id = ?1";
    String SET_VOLUNTEER_AVAILABLE = "UPDATE GYDNTABLE.volunteer SET v.volunteer_is_available = true WHERE v.volunteer_id = ?1";

    @Query(value = GET_VOLUNTEER_BY_NAME, nativeQuery = true)
    public Volunteer findVolunteerByName(String name);

    @Query(value = GET_VOLUNTEER_BY_ID, nativeQuery = true)
    public Volunteer findVolunteerById(Long id);

    @Query(value =  GET_AVAILABLE_VOLUNTEER_BY_TOPICNAME , nativeQuery = true)
    public Long getAvailableVolunteer(String topicName);
    
    @Transactional
    @Modifying
    @Query(value = SET_VOLUNTEER_UNAVAILABLE, nativeQuery = true)
    public void setVolunteerUnavailable(Long volunteerId);

    @Transactional
    @Modifying
    @Query(value = SET_VOLUNTEER_AVAILABLE, nativeQuery = true)
    public void setVolunteerAvailable(Long volunteerId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE GYDNTABLE.volunteer v SET v.volunteer_timestamp = ?1 where v.volunteer_id = ?2", nativeQuery = true)
    public void updateVolunteerTimestamp(Date volunteerTimestamp, Long volunteerId);
}
