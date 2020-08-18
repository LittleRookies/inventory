package com.spring.inventory.inventory.bean;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "stock")
public class Stock {
    private int id;
    private String color;
    private String size;
    private Integer clientId;
    private Integer num;
    private Integer commodity;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
    @Column(name = "size")
    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
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
    @Column(name = "num")
    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    @Basic
    @Column(name = "commodity")
    public Integer getCommodity() {
        return commodity;
    }

    public void setCommodity(Integer commodity) {
        this.commodity = commodity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stock stock = (Stock) o;
        return id == stock.id &&
                Objects.equals(color, stock.color) &&
                Objects.equals(size, stock.size) &&
                Objects.equals(clientId, stock.clientId) &&
                Objects.equals(num, stock.num) &&
                Objects.equals(commodity, stock.commodity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, color, size, clientId, num, commodity);
    }
}
