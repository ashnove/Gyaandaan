package com.gydn.gyandaan.Repository;

import com.gydn.gyandaan.Entity.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student, Long>{
    String GET_STUDENT_BY_NAME = "SELECT * FROM GYDNTABLE.student WHERE username = ?1";

    @Query(value = GET_STUDENT_BY_NAME, nativeQuery = true)
    public Student findStudentByName(String username);
}