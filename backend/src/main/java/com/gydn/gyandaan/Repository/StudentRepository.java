package com.gydn.gyandaan.Repository;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import com.gydn.gyandaan.Entity.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    String GET_AVAILABLE_VOLUNTEER_BY_TOPICNAME = "SELECT id FROM GYDNTABLE.topic t JOIN GYDNTABLE.student WHERE topic_name = ?1 AND available = 1 AND type = 2 ORDER BY last_session_timestamp DESC LIMIT 1";
    String SET_VOLUNTEER_UNAVAILABLE = "UPDATE GYDNTABLE.student v SET v.available = false WHERE v.username = ?1";
    String SET_VOLUNTEER_AVAILABLE = "UPDATE GYDNTABLE.student v SET v.available = true WHERE v.username = ?1";
    String SET_USER_TYPE = "UPDATE GYDNTABLE.student v SET v.type = ?2 WHERE v.username = ?1";
    String GET_ALL_VOLUNTEERS = "SELECT * FROM GYDNTABLE.student v WHERE v.type = 2";
    String GET_ALL_STUDENTS = "SELECT * FROM GYDNTABLE.student v WHERE v.type = 1";

    public Student findByUsername(String username);

    public Student findByToken(String token);

    @Query(value = GET_AVAILABLE_VOLUNTEER_BY_TOPICNAME, nativeQuery = true)
    public Long getAvailableVolunteer(String topicName);

    @Query(value = GET_ALL_VOLUNTEERS, nativeQuery = true)
    public List<Student> findAllVolunteers();

    @Query(value = GET_ALL_STUDENTS, nativeQuery = true)
    public List<Student> findAllStudents();

    @Transactional
    @Modifying
    @Query(value = SET_VOLUNTEER_UNAVAILABLE, nativeQuery = true)
    public void setVolunteerUnavailable(String username);

    @Transactional
    @Modifying
    @Query(value = SET_VOLUNTEER_AVAILABLE, nativeQuery = true)
    public void setVolunteerAvailable(String username);

    @Transactional
    @Modifying
    @Query(value = SET_USER_TYPE, nativeQuery = true)
    public void setUserType(String username, Long type);

    @Transactional
    @Modifying
    @Query(value = "UPDATE GYDNTABLE.student v SET v.last_session_timestamp = ?1 where v.id = ?2", nativeQuery = true)
    public void updateVolunteerTimestamp(Date volunteerTimestamp, Long volunteerId);
}
