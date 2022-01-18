package com.gydn.gyandaan.Repository;

import com.gydn.gyandaan.Entity.Volunteer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{
    String GET_VOLUNTEER_BY_NAME = "SELECT * FROM GYDNTABLE.volunteer WHERE name = ?1";

    @Query(value = GET_VOLUNTEER_BY_NAME, nativeQuery = true)
    public Volunteer findVolunteerByName(String name);
}
