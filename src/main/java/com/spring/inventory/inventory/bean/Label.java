package com.spring.inventory.inventory.bean;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "label")
public class Label {
    private int id;
    private String labelName;
    private Integer num;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "label_name")
    public String getLabelName() {
        return labelName;
    }

    public void setLabelName(String labelName) {
        this.labelName = labelName;
    }

    @Basic
    @Column(name = "num")
    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Label label = (Label) o;
        return id == label.id &&
                Objects.equals(labelName, label.labelName) &&
                Objects.equals(num, label.num);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, labelName, num);
    }
}
