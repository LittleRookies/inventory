package com.spring.inventory.inventory.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "payment")
public class Payment {
    private int id;
    private int clientId;
    private String orderNumber;
    private BigDecimal payPrice;
    private Timestamp timestamp;
    private BigDecimal endPrice;
    private BigDecimal needPrice;
    private String statusPeople;
    private BigDecimal thisPayPrice;

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
    @CreatedDate//创建时间
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

    @Basic
    @Column(name = "end_price")
    public BigDecimal getEndPrice() {
        return endPrice;
    }

    public void setEndPrice(BigDecimal endPrice) {
        this.endPrice = endPrice;
    }

    @Basic
    @Column(name = "need_price")
    public BigDecimal getNeedPrice() {
        return needPrice;
    }

    public void setNeedPrice(BigDecimal needPrice) {
        this.needPrice = needPrice;
    }

    @Basic
    @Column(name = "status_people")
    public String getStatusPeople() {
        return statusPeople;
    }

    public void setStatusPeople(String statusPeople) {
        this.statusPeople = statusPeople;
    }

    @Basic
    @Column(name = "this_pay_price")
    public BigDecimal getThisPayPrice() {
        return thisPayPrice;
    }

    public void setThisPayPrice(BigDecimal thisPayPrice) {
        this.thisPayPrice = thisPayPrice;
    }
}
