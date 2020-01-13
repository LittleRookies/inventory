package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.dao.OrderRepository;
import com.spring.inventory.inventory.dao.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private TransactionRepository transactionRepository;
}
