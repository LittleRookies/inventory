package com.spring.inventory.inventory.dao;

import com.spring.inventory.inventory.bean.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
}
