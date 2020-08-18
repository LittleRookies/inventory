package com.spring.inventory.inventory.service;

import com.alibaba.fastjson.JSON;
import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Commodity;
import com.spring.inventory.inventory.bean.Label;
import com.spring.inventory.inventory.dao.CommodityRepository;
import com.spring.inventory.inventory.dao.LabelRepository;
import com.spring.inventory.inventory.util.DictionaryUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CommodityService {
    @Autowired
    private CommodityRepository commodityRepository;

    @Autowired
    private LabelRepository labelRepository;

    private final Logger logger = LoggerFactory.getLogger(CommodityService.class);

    public AjaxResponseBody findAll(Integer page, Integer size, String model) {
        logger.info("findAll");
        String sql = "select  commodity.*,client.name from commodity join client where commodity.client_id=client.id and commodity.status='Y'";
        if (model == null || model.equals("")) {
            //查询全部
            Pageable pageable = PageRequest.of(page - 1, size);
            Page all = commodityRepository.findPageByParams(sql, pageable);
            return ResponseBodyUtil.responseBodyByPage(all, all.getContent(), "");
        } else {
            //模糊查询
            sql += " and model like ?0";
            Pageable pageable = PageRequest.of(page - 1, size);
            Page all = commodityRepository.findPageByParams(sql, pageable, model);
            return ResponseBodyUtil.responseBodyByPage(all, all.getContent(), "");
        }
    }

    public AjaxResponseBody save(Commodity commodity, String username) {
        logger.info("save=====" + JSON.toJSONString(commodity));
        //创建人不能修改
        if (!commodityRepository.existsById(commodity.getId())) {
            commodity.setFounder(username);
        }
        commodity.setStatusPeople(username);
        try {
            commodityRepository.save(commodity);
        } catch (DataIntegrityViolationException e) {
            return ResponseBodyUtil.defeatAjax(DictionaryUtil.normalErrCode, "该型号已存在请重新输入!");
        }
        String label = commodity.getType();
        String[] split = label.split(",");
        int i = 0;
//        更新label表
        while (i < split.length) {
            Label findLabel = labelRepository.findFirstByLabelName(split[i]);
            if (findLabel == null) {
//                如果不存在该标签则新增
                Label new_Label = new Label();
                new_Label.setLabelName(split[i]);
                new_Label.setNum(1);
                labelRepository.save(new_Label);
            } else {
//                如果已经存在该标签别增加num值
                findLabel.setNum(findLabel.getNum() + 1);
                labelRepository.save(findLabel);
            }
            i++;
        }
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody delete(Integer id, String username) {
        logger.info("delete");
        Commodity commodity = commodityRepository.findById(id).get();
        commodity.setStatusPeople(username);
        commodity.setStatus(DictionaryUtil.statusD);
        commodityRepository.save(commodity);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody findById(Integer id) {
        logger.info("findById");
        return ResponseBodyUtil.successAjax(commodityRepository.findCommodityByIdAndStatus(id, DictionaryUtil.statusY));
    }

    public AjaxResponseBody findAllmodel() {
        logger.info("findAllmodel");
        String sql = "select id,model from `commodity` where status='Y' ";
        List<Map> maps = commodityRepository.findAllByParams(sql);
        return ResponseBodyUtil.successAjax(maps);
    }
}
