package com.spring.inventory.inventory.service;

import com.spring.inventory.inventory.bean.AjaxResponseBody;
import com.spring.inventory.inventory.bean.Size;
import com.spring.inventory.inventory.dao.SizeRepository;
import com.spring.inventory.inventory.util.LoggerErrUtil;
import com.spring.inventory.inventory.util.ResponseBodyUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class SizeService {
    @Autowired
    private SizeRepository sizeRepository;

    private final Logger logger = LoggerFactory.getLogger(SizeService.class);

    public AjaxResponseBody findAll() {
        logger.info("findAll");
        List<String> list = sizeRepository.findGroupByName();
        return ResponseBodyUtil.successAjax(list);
    }

    @Transactional
    public AjaxResponseBody save(Map map) {
        String name = String.valueOf(map.get("name"));
        List<String> sizes = (List) map.get("size");
        try {
            sizeRepository.deleteByName(name);
            List<Size> list = new ArrayList<>();
            for (String size : sizes) {
                Size sizeBean = new Size();
                sizeBean.setName(name);
                sizeBean.setSize(size);
                list.add(sizeBean);
            }
            sizeRepository.saveAll(list);

        } catch (Exception e) {
            LoggerErrUtil.logErr(logger, e);
            return ResponseBodyUtil.defeatAjax();
        }
//        sizeRepository.saveAll(list);
        return ResponseBodyUtil.successAjax();
    }

    public AjaxResponseBody find(String name) {
        List<String> list = sizeRepository.findSizeByName(name);
        return ResponseBodyUtil.successAjax(list);

    }
}
