package com.spring.inventory.inventory.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "orders")
public class Order {
    private String orderNumber;
    private Integer client;
    private String payDirection;
    private String remarks;
    private Timestamp time;
    private Timestamp timestamp;
    private String status;
    private String statusPeople;
    private String founder;
    private BigDecimal price;
    private BigDecimal payPrice;

    @Id
    @Column(name = "orderNumber")
    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    @Basic
    @Column(name = "client")
    public Integer getClient() {
        return client;
    }

    public void setClient(Integer client) {
        this.client = client;
    }

    @Basic
    @Column(name = "pay_direction")
    public String getPayDirection() {
        return payDirection;
    }

    public void setPayDirection(String payDirection) {
        this.payDirection = payDirection;
    }

    @Basic
    @Column(name = "remarks")
    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    @Basic
    @LastModifiedDate//修改时间
    @Column(name = "time")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
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

    @Basic
    @Column(name = "status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
    @Column(name = "founder")
    public String getFounder() {
        return founder;
    }

    public void setFounder(String founder) {
        this.founder = founder;
    }

    @Basic
    @Column(name = "price")
    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @Basic
    @Column(name = "pay_price", insertable = false, columnDefinition = "decimal(18,3) DEFAULT 0.000")
    public BigDecimal getPayPrice() {
        return payPrice;
    }

    public void setPayPrice(BigDecimal payPrice) {
        this.payPrice = payPrice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order orders = (Order) o;
        return Objects.equals(orderNumber, orders.orderNumber) &&
                Objects.equals(client, orders.client) &&
                Objects.equals(payDirection, orders.payDirection) &&
                Objects.equals(remarks, orders.remarks) &&
                Objects.equals(time, orders.time) &&
                Objects.equals(timestamp, orders.timestamp) &&
                Objects.equals(status, orders.status) &&
                Objects.equals(statusPeople, orders.statusPeople) &&
                Objects.equals(founder, orders.founder) &&
                Objects.equals(price, orders.price) &&
                Objects.equals(payPrice, orders.payPrice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderNumber, client, payDirection, remarks, time, timestamp, status, statusPeople, founder, price, payPrice);
    }
}
