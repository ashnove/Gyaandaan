package com.gydn.gyandaan.Repository;

import com.gydn.gyandaan.Entity.Topics;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TopicRepository extends JpaRepository<Topics, Long> {
    String GET_TOPIC_BY_NAME = "SELECT * FROM GYDNTABLE.topics WHERE name = ?1";

    @Query(value = GET_TOPIC_BY_NAME, nativeQuery = true)
    public Topics findTopicByName(String name);
}
