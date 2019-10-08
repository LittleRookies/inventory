package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Label;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LabelRepository extends JpaRepository<Label, Integer> {
    @Query(nativeQuery = true, value = "select * from label as l order by l.num desc limit 8")
    List<Label> findAllLimit();

    Label findFirstByLabelName(String LabelName);
}
