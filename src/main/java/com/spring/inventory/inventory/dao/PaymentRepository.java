package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    List<Payment> findAllByOrderNumberOrderByTimestampDesc(String orderNumer);

}
