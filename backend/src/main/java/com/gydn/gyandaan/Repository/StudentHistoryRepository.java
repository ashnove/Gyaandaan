package com.gydn.gyandaan.Repository;

import com.gydn.gyandaan.Entity.StudentHistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentHistoryRepository extends JpaRepository<StudentHistory, Long> {
    
}
