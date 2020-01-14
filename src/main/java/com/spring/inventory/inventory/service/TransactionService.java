package com.spring.inventory.inventory.service;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Order;
import com.spring.inventory.inventory.bean.OrderAndTransaction;
import com.spring.inventory.inventory.dao.OrderRepository;
import com.spring.inventory.inventory.dao.TransactionRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class TransactionService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private OrderContentService orderContentService;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    private final Logger logger = LoggerFactory.getLogger(TransactionService.class);


    @Transactional
    public AjaxResponseBody add(OrderAndTransaction orderAndTransaction, String founder) {
        logger.info("add-----" + JSON.toJSONString(orderAndTransaction));
        if (!orderAndTransaction.getOrder().getStatus().equals(DictionaryUtil.statusZ)) {
            return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "只能在收货前修改交易订单内容！");
        }
        if (DictionaryUtil.statusZ.equals(orderAndTransaction.getOrder().getStatus())) {
            orderAndTransaction.getOrder().setStatus(DictionaryUtil.statusR);
        }
        orderAndTransaction.getOrder().setFounder(founder);
        orderRepository.save(orderAndTransaction.getOrder());
        transactionRepository.deleteAllByOrderNumber(orderAndTransaction.getOrder().getOrderNumber());
        transactionRepository.saveAll(orderAndTransaction.getTransactions());
        redisTemplate.delete(orderAndTransaction.getOrder().getOrderNumber());
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody findOrderData(String orderNumber) {
        logger.info("findOrderData-----orderNumber={}", orderNumber);
        List<Map> allByOrderNumber = transactionRepository.findAllByOrderNumber(orderNumber);
        Order order = orderRepository.findFirstByOrderNumber(orderNumber);
        if (allByOrderNumber.size() == 0 && order.getStatus().equals(DictionaryUtil.statusZ)) {
            return orderContentService.findOrderData(orderNumber);
        }
        return ResponseBodyUtil.successAjax(allByOrderNumber);
    }

}
