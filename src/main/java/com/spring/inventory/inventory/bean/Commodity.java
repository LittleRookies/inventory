package com.spring.inventory.inventory.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "commodity")
public class Commodity {
    private int id;
    private String model;
    private String color;
    private String sizeType;
    private Integer clientId;
    private String founder;
    private String remarks;
    private Timestamp time;
    private Timestamp timestamp;
    private String picUrl;
    private String type;
    private String status;
    private String statusPeople;

    @Basic
    @Column(name = "type")
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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
    @Column(name = "status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "model")
    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @Basic
    @Column(name = "color")
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Basic
    @Column(name = "size_type")
    public String getSizeType() {
        return sizeType;
    }

    public void setSizeType(String sizeType) {
        this.sizeType = sizeType;
    }

    @Basic
    @Column(name = "client_id")
    public Integer getClientId() {
        return clientId;
    }

    public void setClientId(Integer clientId) {
        this.clientId = clientId;
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
    @Column(name = "pic_url")
    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Commodity commodity = (Commodity) o;
        return id == commodity.id &&
                Objects.equals(model, commodity.model) &&
                Objects.equals(color, commodity.color) &&
                Objects.equals(sizeType, commodity.sizeType) &&
                Objects.equals(clientId, commodity.clientId) &&
                Objects.equals(founder, commodity.founder) &&
                Objects.equals(remarks, commodity.remarks) &&
                Objects.equals(time, commodity.time) &&
                Objects.equals(timestamp, commodity.timestamp);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, model, color, sizeType, clientId, founder, remarks, time, timestamp);
    }
}
