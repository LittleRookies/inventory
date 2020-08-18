package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Stock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface StockRepository extends BaseRepository<Stock, Integer> {
    List<Stock> findAllByCommodityAndColorAndSize(Integer commodity, String color, String size);

    @Query(nativeQuery = true, value = "select c.model, s.color, s.size, cl.name, s.num ,c.type from commodity c,stock s,client cl" +
            " where c.id = s.commodity  and cl.id = s.client_id  and c.model like ?1",
            countQuery = "select count(*) from commodity c,stock s where c.id = s.commodity   and c.model like ?1")
    Page<Map> findAllStocks(Pageable pageable, String model);
}
