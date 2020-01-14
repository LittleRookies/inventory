package com.spring.inventory.inventory.bean;

import java.util.List;

public class OrderAndTransaction {
    private List<Transaction> transactions;
    private Order order;

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
