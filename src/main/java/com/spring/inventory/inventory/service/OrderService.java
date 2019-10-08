package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Order;
import com.spring.inventory.inventory.bean.OrderAndContent;
import com.spring.inventory.inventory.dao.OrderContentRepository;
import com.spring.inventory.inventory.dao.OrderRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import com.spring.inventory.inventory.util.TimeUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderContentRepository orderContentRepository;

    private final Logger logger = LoggerFactory.getLogger(OrderService.class);

    public AjaxResponseBody findAll(Integer page, Integer size, String orderNumber) {
        logger.info("findAll:page={},size={},orderNumber={}", page, size, orderNumber);
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Map> orders = orderRepository.findAllByStatusNotAndOrderNumberLike(pageable, DictionaryUtil.statusD, orderNumber);
        List<Map> content = orders.getContent();
        List<Map> mapList = new ArrayList<>();
        for (Map order : content) {
            //转换为看查看数据
            Map map = new HashMap(order);
            map.put("payDirection", DictionaryUtil.payDirectionDic(String.valueOf(order.get("payDirection"))));
            map.put("status", DictionaryUtil.statusDic(String.valueOf(order.get("status"))));
            mapList.add(map);

        }
        return ResponseBodyUtil.responseBodyByPage(orders, mapList, "");
    }

    public AjaxResponseBody find(String orderNumber) {
        return null;
    }

    @Transactional
    public AjaxResponseBody add(OrderAndContent orderAndContent) {
        orderAndContent.getOrder().setStatus(DictionaryUtil.statusZ);
        orderRepository.save(orderAndContent.getOrder());
        orderContentRepository.saveAll(orderAndContent.getOrderContents());
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody findOrderNumber() {
        logger.info("findOrderNumber");
        String date = TimeUtil.getNowYMD();
        List<Order> allByOrderNumberLike = orderRepository.findAllByOrderNumberLike("DDBH" + date + "%");
        Integer bigNo = 0;//当天最大编号
        for (Order order : allByOrderNumberLike) {
            String orderNumber = order.getOrderNumber();
            Integer t = Integer.valueOf(orderNumber.substring(12));
            if (t > bigNo) {
                bigNo = t;
            }
        }
        bigNo = bigNo + 1;
        String number;
        if (bigNo < 10) {
            number = "00" + bigNo;
        } else if (bigNo < 100) {
            number = "0" + bigNo;
        } else {
            number = "" + bigNo;
        }
        String orderNumber = "DDBH" + date + number;
        return ResponseBodyUtil.successAjax(orderNumber);
    }
}
