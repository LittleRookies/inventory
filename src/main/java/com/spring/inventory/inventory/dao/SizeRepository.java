package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SizeRepository extends JpaRepository<Size, Integer> {
    @Query(value = "select name from Size group by name")
    List<String> findGroupByName();

    @Query(value = "select a.size from Size as a where a.name=:name")
    List<String> findSizeByName(String name);

    @Modifying
    void deleteByName(String name);
}
