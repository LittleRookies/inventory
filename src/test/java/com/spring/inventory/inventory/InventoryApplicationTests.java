package com.spring.inventory.inventory;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.Order;
import com.spring.inventory.inventory.bean.OrderAndContent;
import com.spring.inventory.inventory.bean.OrderContent;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class InventoryApplicationTests {

    @Test
    public void myTest() {
        OrderAndContent orderAndContent = new OrderAndContent();
        Order order = new Order();
        order.setFounder("123");
        order.setOrderNumber("33333");
        OrderContent orderContent = new OrderContent();
        OrderContent orderContents = new OrderContent();
        orderContent.setOrderNumber("2222");
        orderContent.setColor("333333");
        orderContents.setOrderNumber("4444");
        orderContents.setColor("3333555533");
        List<OrderContent> list = new ArrayList<>();
        list.add(orderContent);
        list.add(orderContents);
        orderAndContent.setOrder(order);
        orderAndContent.setOrderContents(list);
        String json = JSON.toJSONString(orderAndContent);
        System.out.println(json);
        OrderAndContent orderAndContent1 = JSON.parseObject(json, OrderAndContent.class);
        System.out.println(orderAndContent1);
    }

}
