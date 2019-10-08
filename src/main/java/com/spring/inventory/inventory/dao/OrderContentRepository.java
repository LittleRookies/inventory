package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.OrderContent;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface OrderContentRepository extends BaseRepository<OrderContent, Integer> {
    @Query(nativeQuery = true, value = "select order_content.*,commodity.model as commodityName from order_content,commodity where commodity.id=order_content.commodity and order_content.orderNumber=?1")
    List<Map> findAllByOrderNumber(String orderNumber);

    @Transactional
    @Modifying
    void deleteAllByOrderNumber(String orderNumber);
}
