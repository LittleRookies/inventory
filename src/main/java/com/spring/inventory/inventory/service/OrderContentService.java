package com.spring.inventory.inventory.service;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.dao.OrderContentRepository;
import com.spring.inventory.inventory.util.LoggerErrUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class OrderContentService {
    @Autowired
    private OrderContentRepository orderContentRepository;

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;


    private final Logger logger = LoggerFactory.getLogger(OrderContentService.class);

    public AjaxResponseBody findOrderData(String orderNumber) {
        logger.info("findOrderData-----orderNumber={}", orderNumber);
        List<Map> allByOrderNumber = orderContentRepository.findAllByOrderNumber(orderNumber);
        return ResponseBodyUtil.successAjax(allByOrderNumber);
    }

    public AjaxResponseBody findOrderDataByRedis(String orderNumber) {
        logger.info("findOrderDataByRedis-----orderNumber={}", orderNumber);
        List o = (List) redisTemplate.opsForValue().get(orderNumber);
        return ResponseBodyUtil.successAjax(o);
    }

    public AjaxResponseBody saveOrderDataByRedis(Map map) {
        logger.info("saveOrderDataByRedis-----" + JSON.toJSONString(map));
        List list = (List) redisTemplate.opsForValue().get(String.valueOf(map.get("orderNumber")));
        if (list == null) {
            list = new ArrayList();
        }
        list.add(map);
        redisTemplate.opsForValue().set(String.valueOf(map.get("orderNumber")), list);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody delOrderDataByRedis(Map map) {
        logger.info("delOrderDataByRedis-----" + JSON.toJSONString(map));
        List list = (List) redisTemplate.opsForValue().get(String.valueOf(map.get("orderNumber")));
        list.removeIf(map::equals);
        redisTemplate.opsForValue().set(String.valueOf(map.get("orderNumber")), list);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody reSetOrderDataByRedis(String orderNumber) {
        logger.info("reSetOrderDataByRedis-----" + orderNumber);
        redisTemplate.delete(orderNumber);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody updOrderDataByRedis(Map map) {
        logger.info("updOrderDataByRedis-----" + JSON.toJSONString(map));
        try {
            List<Map> list = (List) redisTemplate.opsForValue().get(String.valueOf(map.get("orderNumber")));
            assert list != null;
            for (Map maps : list) {
                if (maps.get("commodity").equals(map.get("commodity")) && maps.get("color").equals(map.get("color")) && map.get("size").equals(maps.get("size"))) {
                    if (Double.valueOf(String.valueOf(map.get("totalPrice"))).equals(maps.get("totalPrice"))) {
                        //如果总额相同则代表修改了数量或者单价
                        Double num = Double.valueOf(String.valueOf(map.get("num")));
                        Double price = Double.valueOf(String.valueOf(map.get("price")));
                        Double totalPrice = num * price;
                        maps.put("totalPrice", totalPrice);
                        maps.put("num", num);
                        maps.put("price", price);
                    } else {
                        //如果总额不同则相反
                        Double num = Double.valueOf(String.valueOf(map.get("num")));
                        Double totalPrice = Double.valueOf(String.valueOf(map.get("totalPrice")));
                        Double price = totalPrice / num;
                        maps.put("totalPrice", totalPrice);
                        maps.put("num", num);
                        maps.put("price", price);
                    }
                }

            }
            redisTemplate.opsForValue().set(String.valueOf(map.get("orderNumber")), list);
        } catch (Exception e) {
            LoggerErrUtil.logErr(logger, e);
            return ResponseBodyUtil.defeatAjax();
        }
        return ResponseBodyUtil.successAjax();
    }

}
