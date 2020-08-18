package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.dao.StockRepository;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    private final Logger logger = LoggerFactory.getLogger(StockService.class);


    public AjaxResponseBody findAll(Integer page, Integer size, String model) {
        logger.info("findAll-----page={},size={},model={}", page, size, model);
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Map> allStocks = stockRepository.findAllStocks(pageable, model);
        return ResponseBodyUtil.responseBodyByPage(allStocks, allStocks.getContent(), "");
//        如果status为空则查询所有非D状态的订单

    }


}
