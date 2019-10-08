package com.spring.inventory.inventory.bean;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "order_content")
public class OrderContent implements Serializable {
    private int id;
    private String orderNumber;
    private Integer commodity;
    private String color;
    private String size;
    private Integer num;
    private BigDecimal price;
    private BigDecimal totalPrice;

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
    @Column(name = "orderNumber")
    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    @Basic
    @Column(name = "commodity")
    public Integer getCommodity() {
        return commodity;
    }

    public void setCommodity(Integer commodity) {
        this.commodity = commodity;
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
    @Column(name = "num")
    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
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
    @Column(name = "total_price")
    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderContent that = (OrderContent) o;
        return id == that.id &&
                Objects.equals(orderNumber, that.orderNumber) &&
                Objects.equals(commodity, that.commodity) &&
                Objects.equals(color, that.color) &&
                Objects.equals(size, that.size) &&
                Objects.equals(num, that.num) &&
                Objects.equals(price, that.price) &&
                Objects.equals(totalPrice, that.totalPrice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, orderNumber, commodity, color, size, num, price, totalPrice);
    }
}
