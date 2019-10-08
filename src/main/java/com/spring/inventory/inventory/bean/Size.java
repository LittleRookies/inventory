package com.spring.inventory.inventory.bean;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "size")
public class Size {
    private int id;
    private String name;
    private String size;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)//自增主键
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
    @Column(name = "size")
    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Size size1 = (Size) o;
        return id == size1.id &&
                Objects.equals(name, size1.name) &&
                Objects.equals(size, size1.size);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, size);
    }
}
