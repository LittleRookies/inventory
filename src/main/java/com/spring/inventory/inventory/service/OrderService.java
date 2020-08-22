package com.spring.inventory.inventory.service;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.*;
import com.spring.inventory.inventory.dao.*;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.InAndOutBoundUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import com.spring.inventory.inventory.util.TimeUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

import static com.spring.inventory.inventory.util.TypeTransformUtil.ObjToBigDec;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderContentRepository orderContentRepository;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    private final Logger logger = LoggerFactory.getLogger(OrderService.class);

    public AjaxResponseBody findAll(Integer page, Integer size, String orderNumber, String status) {
        logger.info("findAll-----page={},size={},orderNumber={},status={}", page, size, orderNumber, status);
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Map> orders;
//        如果status为空则查询所有非D状态的订单
        if (status.equals("")) {
            orders = orderRepository.findAllByStatusNotAndOrderNumberLike(pageable, DictionaryUtil.statusD, orderNumber);
        } else {
            orders = orderRepository.findAllByStatusNotAndOrderNumberLikeBystatus(pageable, status, orderNumber);
        }

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

    public AjaxResponseBody findAllByStatus(Integer page, Integer size, String orderNumber) {
        logger.info("findAllByStatus-----page={},size={},orderNumber={}", page, size, orderNumber);
        page = page == null ? 1 : page;
        size = size == null ? 10 : size;
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Map> orders = orderRepository.findAllByStatusAndOrderNumberLike(pageable, new ArrayList<String>() {{
            this.add(DictionaryUtil.statusY);
            this.add(DictionaryUtil.statusZ);
            this.add(DictionaryUtil.statusR);
        }}, orderNumber);
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
        logger.info("find-----orderNumber={}", orderNumber);
        Order firstByOrderNumber = orderRepository.findFirstByOrderNumber(orderNumber);
        return ResponseBodyUtil.successAjax(firstByOrderNumber);
    }

    public AjaxResponseBody findUpdate(String orderNumber) {
        logger.info("findUpdate-----orderNumber={}", orderNumber);
        Order firstByOrderNumber = orderRepository.findFirstByOrderNumber(orderNumber);
        List<Map> allByOrderNumber = orderContentRepository.findAllByOrderNumberBysql(orderNumber);
        if (allByOrderNumber.size() != 0) {
            List<Map> list = new ArrayList<>();
            redisTemplate.delete(orderNumber);
            for (Map map : allByOrderNumber) {
                Map newMap = new LinkedHashMap(map);
                newMap.put("totalPrice", String.valueOf(map.get("total_price")));
                newMap.remove("total_price");
                newMap.put("price", String.valueOf(map.get("price")));
                list.add(newMap);
            }
            redisTemplate.opsForValue().set(orderNumber, list);
        }
        return ResponseBodyUtil.successAjax(firstByOrderNumber);
    }

    public AjaxResponseBody findUpdateOnTransaction(String orderNumber) {
        logger.info("findUpdateOnTransaction-----orderNumber={}", orderNumber);
        Order firstByOrderNumber = orderRepository.findFirstByOrderNumber(orderNumber);
        List<Map> allByOrderNumber = transactionRepository.findAllByOrderNumber(orderNumber);
        Order order = orderRepository.findFirstByOrderNumber(orderNumber);
        if (allByOrderNumber.size() == 0 && order.getStatus().equals(DictionaryUtil.statusZ)) {
            allByOrderNumber = orderContentRepository.findAllByOrderNumberBysql(orderNumber);
        }
        redisTemplate.delete(orderNumber);
        if (allByOrderNumber.size() != 0) {
            List<Map> list = new ArrayList<>();
            for (Map map : allByOrderNumber) {
                Map newMap = new LinkedHashMap(map);
                newMap.put("totalPrice", String.valueOf(map.get("total_price")));
                newMap.remove("total_price");
                newMap.put("price", String.valueOf(map.get("price")));
                list.add(newMap);
            }
            redisTemplate.opsForValue().set(orderNumber, list);
        }
        return ResponseBodyUtil.successAjax(firstByOrderNumber);
    }

    @Transactional
    public AjaxResponseBody add(OrderAndContent orderAndContent, String founder) {
        logger.info("add-----" + JSON.toJSONString(orderAndContent));
        orderAndContent.getOrder().setFounder(founder);
//        client=1 为 散户
        if (orderAndContent.getOrder().getClient() != 1) {
            orderAndContent.getOrder().setPayPrice(ObjToBigDec(0));
//            如果为非散户
            if (orderAndContent.getOrder().getStatus() == null || "".equals(orderAndContent.getOrder().getStatus())) {
                orderAndContent.getOrder().setStatus(DictionaryUtil.statusN);
            }
            if (!orderAndContent.getOrder().getStatus().equals(DictionaryUtil.statusN)) {
                return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "该订单已经发出或已经完成无法修改！");
            }
            orderRepository.save(orderAndContent.getOrder());//存入订单
        } else {
//            如果为散户则订单、交易直接完成
//            散户存入库存操作
            List<Stock> stockArrayList = new ArrayList<>();
            for (OrderContent orderContent : orderAndContent.getOrderContents()) {
                List<Stock> allByCommodityAndColorAndSize = stockRepository.findAllByCommodityAndColorAndSize(
                        orderContent.getCommodity(), orderContent.getColor(), orderContent.getSize());
                if (allByCommodityAndColorAndSize.size() == 0) {
                    Stock stock = new Stock();
//                若库存没有记录则存入
                    stock.setClientId(orderAndContent.getOrder().getClient());
                    stock.setColor(orderContent.getColor());
                    stock.setCommodity(orderContent.getCommodity());
                    stock.setSize(orderContent.getSize());
                    try {
                        stock.setNum(InAndOutBoundUtil.inAndOut(0, orderContent.getNum(), orderAndContent.getOrder().getPayDirection()));
                    } catch (Exception e) {
                        return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, e.getLocalizedMessage());
                    }
                    stockArrayList.add(stock);

                } else {
                    Stock stock;
//               若库存有记录则更新记录
                    stock = allByCommodityAndColorAndSize.get(0);
                    try {
                        stock.setNum(InAndOutBoundUtil.inAndOut(stock.getNum(), orderContent.getNum(), orderAndContent.getOrder().getPayDirection()));
                    } catch (Exception e) {
                        return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, e.getLocalizedMessage());
                    }
                    stockArrayList.add(stock);
                }
            }
            stockRepository.saveAll(stockArrayList);
            //            存储订单信息
            orderAndContent.getOrder().setStatus(DictionaryUtil.statusY);
            orderAndContent.getOrder().setPayPrice(orderAndContent.getOrder().getPrice());
            Order order = orderAndContent.getOrder();
            orderRepository.save(orderAndContent.getOrder());//存入订单
//            存储交易信息
            Payment payment = new Payment();
            payment.setOrderNumber(order.getOrderNumber());
            payment.setClientId(order.getClient());
            payment.setPayPrice(order.getPrice());
            payment.setEndPrice(order.getPrice());
            payment.setNeedPrice(ObjToBigDec(0));
            payment.setStatusPeople(founder);
            payment.setThisPayPrice(order.getPrice());
            paymentRepository.save(payment);
//            存储实际到收货信息
            List<Transaction> list = new ArrayList<>();
            for (OrderContent orderContent : orderAndContent.getOrderContents()) {
                Transaction transaction = JSON.parseObject(JSON.toJSONString(orderContent), Transaction.class);
                list.add(transaction);
            }
            transactionRepository.saveAll(list);

        }
        orderContentRepository.deleteAllByOrderNumber(orderAndContent.getOrder().getOrderNumber());//删除原订单内容
        orderContentRepository.saveAll(orderAndContent.getOrderContents());//存入新订单内容
        redisTemplate.delete(orderAndContent.getOrder().getOrderNumber());
        return ResponseBodyUtil.successAjax();

    }

    @Transactional
    public AjaxResponseBody del(String orderNumber, String status_people) {
        logger.info("del-----orderNumber={}", orderNumber);
        Order order = orderRepository.findFirstByOrderNumber(orderNumber);
        if (!order.getStatus().equals(DictionaryUtil.statusN)) {
            return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "订单已经发货或已经执行后续操作，无法删除！");
        }
        order.setStatus(DictionaryUtil.statusD);
        order.setStatusPeople(status_people);
        orderRepository.save(order);
        return ResponseBodyUtil.successAjax();
    }

    @Transactional
    public AjaxResponseBody change(String orderNumber, String status_people) {
        logger.info("change-----orderNumber={}", orderNumber);
        Order order = orderRepository.findFirstByOrderNumber(orderNumber);
        List<OrderContent> allByOrderNumber = orderContentRepository.findAllByOrderNumber(orderNumber);

//        如果为销售需要检查是否有足够库存
        List<Stock> list = new ArrayList<>();
        if (order.getPayDirection().equals("P")) {
            for (OrderContent orderContent : allByOrderNumber) {
                List<Stock> allByCommodityAndColorAndSize = stockRepository.findAllByCommodityAndColorAndSize(
                        orderContent.getCommodity(), orderContent.getColor(), orderContent.getSize());
                if (allByCommodityAndColorAndSize.size() == 0) {
                    Stock stock = new Stock();
//                若库存没有记录则存入
                    stock.setClientId(order.getClient());
                    stock.setColor(orderContent.getColor());
                    stock.setCommodity(orderContent.getCommodity());
                    stock.setSize(orderContent.getSize());
                    try {
                        stock.setNum(InAndOutBoundUtil.inAndOut(0, orderContent.getNum(), order.getPayDirection()));
                    } catch (Exception e) {
                        return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, e.getLocalizedMessage());
                    }
                    list.add(stock);

                } else {
                    Stock stock;
//               若库存有记录则更新记录
                    stock = allByCommodityAndColorAndSize.get(0);
                    try {
                        stock.setNum(InAndOutBoundUtil.inAndOut(stock.getNum(), orderContent.getNum(), order.getPayDirection()));
                    } catch (Exception e) {
                        return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, e.getLocalizedMessage());
                    }
                    list.add(stock);
                }
            }

        }
//        修改库存数量
        stockRepository.saveAll(list);
//        修改订单状态
        order.setStatus(DictionaryUtil.statusZ);
        order.setStatusPeople(status_people);
        orderRepository.save(order);
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

    public AjaxResponseBody findAllByclient(Integer page, Integer size, Integer id) {
        logger.info("findAllByclient-----id={}", id);
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Map> allByClientAndPayDirection = orderRepository.findAllByClientAndPayDirection(pageable, id);

        List<Map> content = allByClientAndPayDirection.getContent();
        List<Map> mapList = new ArrayList<>();
        for (Map order : content) {
            //转换为看查看数据
            Map map = new HashMap(order);
            map.put("payDirection", DictionaryUtil.payDirectionDic(String.valueOf(order.get("payDirection"))));
            map.put("status", DictionaryUtil.statusDic(String.valueOf(order.get("status"))));
            mapList.add(map);

        }
        return ResponseBodyUtil.responseBodyByPage(allByClientAndPayDirection, mapList, "");

    }
}
