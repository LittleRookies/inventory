package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Bill;
import com.spring.inventory.inventory.bean.Order;
import com.spring.inventory.inventory.dao.BillRepository;
import com.spring.inventory.inventory.dao.OrderRepository;
import com.spring.inventory.inventory.task.TimeTask;
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

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BillService {
    @Autowired
    private BillRepository billRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private TimeTask timeTask;

    private final Logger logger = LoggerFactory.getLogger(BillService.class);


    public AjaxResponseBody findAll(Integer page, Integer size, String name) {
        logger.info("findAll-----page={},size={},name={}", page, size, name);
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Map> all = billRepository.findAll(pageable, name);
        List<Map> maps = new ArrayList<>();
        for (Map map : all.getContent()) {
            Map newMap = new HashMap(map);
            newMap.put("directionDic", DictionaryUtil.payDirectionDic((String) map.get("direction")));
            newMap.put("endDic", DictionaryUtil.end((String) map.get("end")));
            maps.add(newMap);
        }
        return ResponseBodyUtil.responseBodyByPage(all, maps, "");
    }


    @Transactional
    public AjaxResponseBody end(Integer id) throws ParseException {
        logger.info("end-----id={}", id);
        Bill bill = billRepository.findFirstById(id);
        timeTask.billSortPlanByClient(bill.getDirection(), bill.getClient());
        bill.setEnd("Y");
        bill.setTime(TimeUtil.getTimebytimestamp());
        billRepository.save(bill);
        List<Order> allByTimeBetweenAndClientAndPayDirection =
                orderRepository.findAllByTimestampBetweenAndClientAndPayDirection
                        (bill.getStartTime(), bill.getTime(), bill.getClient(), bill.getDirection());

        for (Order order : allByTimeBetweenAndClientAndPayDirection) {
            order.setStatus(DictionaryUtil.statusY);
        }
        orderRepository.saveAll(allByTimeBetweenAndClientAndPayDirection);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody flush() throws ParseException {
        logger.info("flush");
        timeTask.billSort();
        return ResponseBodyUtil.successAjax();
    }
}
