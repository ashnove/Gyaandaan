package com.gydn.gyandaan.Repository;

import com.gydn.gyandaan.Entity.Volunteer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{
    String GET_VOLUNTEER_BY_NAME = "SELECT * FROM GYDNTABLE.volunteer WHERE volunteer_username = ?1";
    String GET_AVAILABLE_VOLUNTEER_BY_TOPICNAME = "SELECT new com.gydn.gyandaan.Entity.Volunteer(volunteerId, volunteerUsername, volunteerIsAvailable) FROM Topic t JOIN Volunteer v WHERE t.topicName = ?1 ORDER BY v.volunteerTimestamp DESC";
    String SET_VOLUNTEER_UNAVAILABLE = "UPDATE GYDNTABLE.volunteer SET volunteer_is_available = false WHERE volunteer_id = ?1";
    String SET_VOLUNTEER_AVAILABLE = "UPDATE GYDNTABLE.volunteer SET volunteer_is_available = true WHERE volunteer_id = ?1";

    @Query(value = GET_VOLUNTEER_BY_NAME, nativeQuery = true)
    public Volunteer findVolunteerByName(String name);

    @Query(value = GET_AVAILABLE_VOLUNTEER_BY_TOPICNAME)
    public Volunteer getAvailableVolunteer(String topicName);

    @Query(value = SET_VOLUNTEER_UNAVAILABLE, nativeQuery = true)
    public void setVolunteerUnavailable(Long volunteerId);

    @Query(value = SET_VOLUNTEER_AVAILABLE, nativeQuery = true)
    public void setVolunteerAvailable(Long volunteerId);
}
