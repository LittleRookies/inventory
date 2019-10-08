package com.spring.inventory.inventory.bean;

import java.util.List;

public class OrderAndContent {
    private List<OrderContent> orderContents;
    private Order order;

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public List<OrderContent> getOrderContents() {
        return orderContents;
    }

    public void setOrderContents(List<OrderContent> orderContents) {
        this.orderContents = orderContents;
    }
}
