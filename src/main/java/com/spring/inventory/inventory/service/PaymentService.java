package com.spring.inventory.inventory.service;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Order;
import com.spring.inventory.inventory.bean.Payment;
import com.spring.inventory.inventory.dao.OrderRepository;
import com.spring.inventory.inventory.dao.PaymentRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import com.spring.inventory.inventory.util.TimeUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

import static com.spring.inventory.inventory.util.TypeTransformUtil.ObjToBigDec;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private OrderRepository orderRepository;

    private final Logger logger = LoggerFactory.getLogger(PaymentService.class);

    @Transactional
    public AjaxResponseBody payOrder(Map map, String name) {
        logger.info("payOrder-----" + JSON.toJSONString(map));
        Payment payment = new Payment();
//        前台 price                  数据库 payPrice                     （订单总价）
//        前台 thispayPrice           数据库 thisPayPrice                 （本次交易金额）
//        前台 payPrice                                                  （已支付金额）
//                                   数据库 needPrice                    （剩余金额）
//                                   数据库 endPrice                     （交易后金额）
        payment.setClientId((Integer) map.get("clientid"));
        payment.setOrderNumber(String.valueOf(map.get("orderNumber")));
        payment.setPayPrice(ObjToBigDec(map.get("price")));
        payment.setEndPrice(ObjToBigDec(map.get("thispayPrice")).add(ObjToBigDec(map.get("payPrice"))));
        payment.setNeedPrice(ObjToBigDec(map.get("price")).subtract(ObjToBigDec(map.get("thispayPrice"))).
                subtract(ObjToBigDec(map.get("payPrice"))));
        payment.setThisPayPrice(ObjToBigDec(map.get("thispayPrice")));
        payment.setStatusPeople(name);
        paymentRepository.save(payment);
        orderRepository.updatePayPrice(payment.getEndPrice(), TimeUtil.getNow(), payment.getOrderNumber());
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody endOrder(String orderNumber, String name) {
        logger.info("orderNumber-----" + orderNumber);
        Order order = orderRepository.findFirstByOrderNumber(orderNumber);
        if (order.getStatus().equals(DictionaryUtil.statusR)) {
            order.setStatus(DictionaryUtil.statusY);
            order.setStatusPeople(name);
            orderRepository.save(order);
            return ResponseBodyUtil.successAjax();
        } else {
            return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "订单未确认收货或已经完成无法继续完成订单");
        }

    }
}
