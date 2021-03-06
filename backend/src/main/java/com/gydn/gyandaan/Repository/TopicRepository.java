package com.gydn.gyandaan.Repository;

import com.gydn.gyandaan.Entity.Topic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Long> {
    String GET_TOPIC_BY_NAME = "SELECT * FROM topic WHERE topic_name = ?1";

    @Query(value = GET_TOPIC_BY_NAME, nativeQuery = true)
    public Topic findTopicByName(String topicName);
}
