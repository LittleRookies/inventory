package com.spring.inventory.inventory.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "bill")
public class Bill {
    private int id;
    private Integer client;
    private BigDecimal price;
    private BigDecimal payPrice;
    private String end;
    private Timestamp time;
    private String remark;
    private String direction;
    private Timestamp startTime;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
    @Column(name = "price")
    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
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
    @Column(name = "end")
    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    @Basic
    @Column(name = "time")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    @Basic
    @Column(name = "remark")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Basic
    @Column(name = "direction")
    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    @Basic
    @Column(name = "startTime")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bill bill = (Bill) o;
        return id == bill.id &&
                Objects.equals(client, bill.client) &&
                Objects.equals(price, bill.price) &&
                Objects.equals(payPrice, bill.payPrice) &&
                Objects.equals(end, bill.end) &&
                Objects.equals(time, bill.time) &&
                Objects.equals(remark, bill.remark) &&
                Objects.equals(direction, bill.direction) &&
                Objects.equals(startTime, bill.startTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, client, price, payPrice, end, time, remark, direction, startTime);
    }
}
