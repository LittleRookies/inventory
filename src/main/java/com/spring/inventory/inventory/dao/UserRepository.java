package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserRepository extends JpaRepository<User, String> {
    User findFirstByUsernameAndStatus(String username,String status);

    List<User> findByUsername(String username);

    @Transactional
    @Modifying
    @Query(value = "update User set lastTime=:time where username=:username")
    void updateLoginTime(@Param("time") String time, @Param("username") String username);

    Page<User> findAllByStatus(Pageable pageable, String status);

}
