package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Bill;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface BillRepository extends BaseRepository<Bill, Integer> {
    List<Bill> findAllByClientAndDirectionOrderByTimeDesc(Integer client, String direction);


    @Query(nativeQuery = true, value = "select b.*,c.name from bill b,client c where b.client=c.id and c.name like ?1 order by b.time desc",
            countQuery = "select count(*) from bill b,client c where b.client=c.id and c.name like ?1")
    Page<Map> findAll(Pageable pageable, String name);


    Bill findFirstById(Integer id);
}
