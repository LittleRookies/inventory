package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.OrderContent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderContentRepository extends JpaRepository<OrderContent, Integer> {
    List<OrderContent> findAllByOrderNumber(String orderNumber);
}
