package com.spring.inventory.inventory.service;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.*;
import com.spring.inventory.inventory.dao.OrderRepository;
import com.spring.inventory.inventory.dao.StockRepository;
import com.spring.inventory.inventory.dao.TransactionRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.InAndOutBoundUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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
    private StockRepository stockRepository;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    private final Logger logger = LoggerFactory.getLogger(TransactionService.class);


    @Transactional(rollbackFor = Exception.class)
    public AjaxResponseBody add(OrderAndTransaction orderAndTransaction, String founder) {
        logger.info("add-----" + JSON.toJSONString(orderAndTransaction));
        Order order = orderRepository.findFirstByOrderNumber(orderAndTransaction.getOrder().getOrderNumber());

        if (!order.getStatus().equals(DictionaryUtil.statusZ)) {
            return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "只能在收货前修改交易订单内容！");
        }
        if (DictionaryUtil.statusZ.equals(order.getStatus())) {
            order.setStatus(DictionaryUtil.statusR);
        }
        order.setFounder(founder);
        List<Stock> list = new ArrayList<>();
//        存入库存
        if (order.getPayDirection().equals("R")) {
            for (Transaction transaction : orderAndTransaction.getTransactions()) {
                List<Stock> allByCommodityAndColorAndSize = stockRepository.findAllByCommodityAndColorAndSize(
                        transaction.getCommodity(), transaction.getColor(), transaction.getSize());
                if (allByCommodityAndColorAndSize.size() == 0) {
                    Stock stock = new Stock();
//                若库存没有记录则存入
                    stock.setClientId(order.getClient());
                    stock.setColor(transaction.getColor());
                    stock.setCommodity(transaction.getCommodity());
                    stock.setSize(transaction.getSize());
                    try {
                        stock.setNum(InAndOutBoundUtil.inAndOut(0, transaction.getNum(), order.getPayDirection()));
                    } catch (Exception e) {
                        return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, e.getLocalizedMessage());
                    }
                    list.add(stock);

                } else {
                    Stock stock;
//               若库存有记录则更新记录
                    stock = allByCommodityAndColorAndSize.get(0);
                    try {
                        stock.setNum(InAndOutBoundUtil.inAndOut(stock.getNum(), transaction.getNum(), order.getPayDirection()));
                    } catch (Exception e) {
                        return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, e.getLocalizedMessage());
                    }
                    list.add(stock);
                }
            }
        }
        stockRepository.saveAll(list);
        orderRepository.save(order);
        transactionRepository.deleteAllByOrderNumber(order.getOrderNumber());
        transactionRepository.saveAll(orderAndTransaction.getTransactions());
        redisTemplate.delete(order.getOrderNumber());
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

    public AjaxResponseBody findAllByOrderNumber(String orderNumber) {
        logger.info("findAllByOrderNumber-----orderNumber={}", orderNumber);
        List<Map> allByOrderNumber = transactionRepository.findAllByOrderNumber(orderNumber);
        return ResponseBodyUtil.successAjax(allByOrderNumber);
    }
}
