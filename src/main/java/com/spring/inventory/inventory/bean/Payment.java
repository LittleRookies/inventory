package com.spring.inventory.inventory.bean;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "payment")
public class Payment {
    private int id;
    private int clientId;
    private String orderNumber;
    private BigDecimal payPrice;
    private Timestamp timestamp;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "client_id")
    public int getClientId() {
        return clientId;
    }

    public void setClientId(int clientId) {
        this.clientId = clientId;
    }

    @Basic
    @Column(name = "orderNumber")
    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    @Basic
    @Column(name = "pay_price")
    public BigDecimal getPayPrice() {
        return payPrice;
    }

    public void setPayPrice(BigDecimal payPrice) {
        this.payPrice = payPrice;
    }

    @Basic
    @Column(name = "timestamp")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Payment payment = (Payment) o;
        return id == payment.id &&
                clientId == payment.clientId &&
                Objects.equals(orderNumber, payment.orderNumber) &&
                Objects.equals(payPrice, payment.payPrice) &&
                Objects.equals(timestamp, payment.timestamp);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, clientId, orderNumber, payPrice, timestamp);
    }
}