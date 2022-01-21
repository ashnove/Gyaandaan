package com.gydn.gyandaan.Repository;

import com.gydn.gyandaan.Entity.VolunteerStatus;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface VolunteerStatusRepository extends JpaRepository<VolunteerStatus, Long>{
    // String DELETE_STATUS_BY_VOLUNTEER_ID = "DELETE FROM GYDNTABLE.volunteer_status WHERE volunteer_id = ?1";

    // @Transactional
    // @Query(value = DELETE_STATUS_BY_VOLUNTEER_ID, nativeQuery = true)
    // public void deleteByVolunteerId(Long volunteerStatusId);


}
