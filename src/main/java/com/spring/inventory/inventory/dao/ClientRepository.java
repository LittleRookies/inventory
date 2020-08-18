package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Integer> {

    Client findFirstByIdAndStatus(Integer id, String status);

    Page<Client> findAllByNameLikeAndStatus(Pageable pageable, String name, String status);

    Page<Client> findAllByStatus(Pageable pageable, String status);

    @Query(nativeQuery = true, value = "select * from client where status=?1 and id != 1")
//    id=1为系统默认用户---散户
    List<Client> findAllByStatus(String status);
}
