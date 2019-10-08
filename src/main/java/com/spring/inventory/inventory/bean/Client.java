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
@Table(name = "client")
public class Client {
    private int id;
    private String name;
    private String telephone;
    private String people;
    private String phone;
    private String adress;
    private String remarks;
    private Timestamp time;
    private String founder;
    private Timestamp timestamp;
    private String status;
    private String statusPeople;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
    @Column(name = "telephone")
    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    @Basic
    @Column(name = "people")
    public String getPeople() {
        return people;
    }

    public void setPeople(String people) {
        this.people = people;
    }

    @Basic
    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Basic
    @Column(name = "adress")
    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Client client = (Client) o;
        return id == client.id &&
                Objects.equals(name, client.name) &&
                Objects.equals(telephone, client.telephone) &&
                Objects.equals(people, client.people) &&
                Objects.equals(phone, client.phone) &&
                Objects.equals(adress, client.adress) &&
                Objects.equals(remarks, client.remarks) &&
                Objects.equals(time, client.time);
    }

    @Override
    public String toString() {
        return "{" + "\"id\":" +
                id +
                ",\"name\":\"" +
                name + '\"' +
                ",\"telephone\":\"" +
                telephone + '\"' +
                ",\"people\":\"" +
                people + '\"' +
                ",\"phone\":\"" +
                phone + '\"' +
                ",\"adress\":\"" +
                adress + '\"' +
                ",\"remarks\":\"" +
                remarks + '\"' +
                ",\"time\":\"" +
                time + '\"' +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, telephone, people, phone, adress, remarks, time);
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
    @CreatedDate//创建时间
    @Column(name = "timestamp")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
