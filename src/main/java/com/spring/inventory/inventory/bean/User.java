package com.spring.inventory.inventory.bean;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "user")
public class User {
    private String username;
    private String name;
    private String password;
    private String role;
    private String email;
    private String lastTime;
    private String telephone;
    private String founder;
    private Timestamp timestamp;
    private String status;
    private String statusPeople;

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

    @Id
    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "role")
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "last_time")
    public String getLastTime() {
        return lastTime;
    }

    public void setLastTime(String lastTime) {
        this.lastTime = lastTime;
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
    @Column(name = "founder")
    public String getFounder() {
        return founder;
    }

    public void setFounder(String founder) {
        this.founder = founder;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(username, user.username) &&
                Objects.equals(name, user.name) &&
                Objects.equals(password, user.password) &&
                Objects.equals(role, user.role) &&
                Objects.equals(email, user.email) &&
                Objects.equals(lastTime, user.lastTime) &&
                Objects.equals(telephone, user.telephone) &&
                Objects.equals(founder, user.founder);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("{");
        sb.append("\"username\":\"")
                .append(username).append('\"');
        sb.append(",\"name\":\"")
                .append(name).append('\"');
        sb.append(",\"password\":\"")
                .append(password).append('\"');
        sb.append(",\"role\":\"")
                .append(role).append('\"');
        sb.append(",\"email\":\"")
                .append(email).append('\"');
        sb.append(",\"lastTime\":\"")
                .append(lastTime).append('\"');
        sb.append(",\"telephone\":\"")
                .append(telephone).append('\"');
        sb.append(",\"founder\":\"")
                .append(founder).append('\"');
        sb.append('}');
        return sb.toString();
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, name, password, role, email, lastTime, telephone, founder);
    }

    @Basic
    @Column(name = "timestamp")
    @CreatedDate//插入时间
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
